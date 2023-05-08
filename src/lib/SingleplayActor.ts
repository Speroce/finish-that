class SingleplayActor {
    readonly cardsPanel = new CardsPanel();
    constructor(
        private initFrom: RGBModel,
        private initTo: RGBModel
    ) {
        this.effectController = new EffectController(this.initFrom);
     }

    get from() {
        return this.effectController.outModel;
    }

    get to() {
        return this.initTo;
    }

    get activeEffects() {
        return this.effectController.effects;
    }

    setFrom(from: RGBModel) {
        this.initFrom = from;
        const { effects } = this.effectController;
        this.effectController = new EffectController(this.initFrom);
        for (const effect of effects) {
            this.effectController.addEffect(effect);
        }
    }

    setTo(to: RGBModel) {
        this.initTo = to;
    }
    runRGBEffect(effect: RGBEffect) {
        this.effectController.addEffect(effect);
    }
    removeRGBEffect(id: string) {
        this.effectController.removeEffect(id);
    }

    private effectController: EffectController;
    private updateEffectController() {
        this.effectController = new EffectController(this.initFrom);
    }
}