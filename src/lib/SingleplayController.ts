interface ModelPair {
    from: RGBModel,
    to: RGBModel
}

class SingleplayActor<E extends Effect = Effect> {
    readonly cardsPanel = new CardsPanel<E>();
    constructor(
        public from: RGBModel,
        public to: RGBModel
    ) { }
}

type SingleplayActorType = 'player' | 'AI';

class SingleplayController {
    readonly player: SingleplayActor;
    readonly AI: SingleplayActor<RGBEffect>;
    constructor() {
        const playerTo = getRandomRGB();
        const playerFrom = getRandomBoundRGB(playerTo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.player = new SingleplayActor(playerFrom, playerTo);
        const AITo = getRandomRGB();
        const AIFrom = getRandomBoundRGB(AITo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.AI = new SingleplayActor<RGBEffect>(AIFrom, AITo);
    }
    get leftTop() {
        return this.player.to;
    }
    get leftBottom() {
        return this.player.from;
    }
    get rightTop() {
        return this.AI.from;
    }
    get rightBottom() {
        return this.AI.to;
    }
    playCard(actorType: SingleplayActorType, id: string) {
        // const pair = this.getPair(actor);
        const actor = this.getActor(actorType);
        actor.cardsPanel.getCard(id)

    }
    private getActor(actor: 'player'): SingleplayActor<Effect>
    private getActor(actor: 'AI'): SingleplayActor<RGBEffect>
    private getActor(actor: SingleplayActorType): SingleplayActor<Effect>
    private getActor(actor: SingleplayActorType): SingleplayActor<Effect> {
        return actor === 'player' ? this.player : this.AI;
    }

}