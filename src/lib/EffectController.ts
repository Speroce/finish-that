class EffectController {
    constructor(
        private readonly inModel: RGBModel
    ) {
        this.cachedModel = inModel;
    }
    get outModel() {
        return this.cachedModel;
    }
    get effects() {
        return [...this.effectsMap.values()];
    }
    addEffect(effect: RGBEffect) {
        this.effectsMap.set(effect.id, effect);
        this.refresh();
    }
    removeEffect(id: string) {
        this.effectsMap.delete(id) && this.refresh();
    }
    private effectsMap: Map<string, RGBEffect> = new Map();
    private cachedModel: RGBModel;
    private refresh() {
        this.cachedModel = this.effects.reduce((acc, effect) => {
            return effect.run(acc);
        }, this.inModel);
    }
}

