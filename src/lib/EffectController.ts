class EffectController {
    constructor(
        private readonly inModel: RGBModel
    ) { }
    get outModel() {
        return this.cachedModel;
    }
    addEffect(effect: RGBEffect) {
        this.effectsMap.set(effect.id, effect);
        this.refresh();
    }
    removeEffect(id: string) {
        this.effectsMap.delete(id) && this.refresh();
    }
    private effectsMap: Map<string, RGBEffect> = new Map();
    private get effects() {
        return [...this.effectsMap.values()];
    }
    private cachedModel: RGBModel;
    private refresh() {
        this.cachedModel = this.effects.reduce((acc, effect) => {
            return effect.run(acc);
        }, this.inModel);
    }
}

