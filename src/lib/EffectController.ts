interface IEffect {
    readonly id: string;
    run<Model extends IRGBModel>(model: Model): Model;
}

interface IEffectController {
    get outModel(): IRGBModel;
    addEffect(effect: IEffect): void;
    removeEffect(id: string): void;
}

const { EffectController, Effect } = (() => {

    abstract class Effect implements IEffect {
        readonly id: string = crypto.randomUUID();
        constructor(
            readonly name: string,

        ) { }
        abstract run<Model extends IRGBModel>(model: Model): Model;
    }

    class EffectController implements IEffectController {
        get outModel() {
            return this.cachedModel;
        }
        addEffect(effect: Effect) {
            this.effectsMap.set(effect.id, effect);
            this.refresh();
        }
        removeEffect(id: string) {
            this.effectsMap.delete(id) && this.refresh();
        }

        private readonly inModel: IRGBModel;
        private effectsMap: Map<string, Effect> = new Map();
        private get effects() {
            return [...this.effectsMap.values()];
        }
        private cachedModel: IRGBModel;
        private refresh() {
            this.cachedModel = this.effects.reduce((acc, effect) => {
                return effect.run(acc);
            }, this.inModel)
        }
    }

    return { EffectController, Effect };
})();

