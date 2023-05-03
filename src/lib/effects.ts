
const { EffectController, Effect } = (() => {

    abstract class Effect {
        readonly id: string = crypto.randomUUID();
        constructor(
            readonly name: string,

        ) { }
        abstract run<Model>(model: Model): Model;
    }
    class EffectController {
        get outModel() {
            return this.cachedModel;
        }
        addEffect(effect: Effect) {
            this.effectsMap.set(effect.id, effect);
            this.refresh();
        }
        removeEffect(id: string) {
            this.effectsMap.delete(id);
            this.refresh();
         }
        private readonly inModel: IRGBModel;
        private get effects() {
            return [...this.effectsMap.values()];
        }
        private effectsMap: Map<string, Effect> = new Map();
        private cachedModel: IRGBModel;
        private refresh() {
            this.cachedModel = this.effects.reduce((acc, effect) => {
                return effect.run(acc);
            }, this.inModel)
        }
    }

    return { EffectController, Effect };
})();

