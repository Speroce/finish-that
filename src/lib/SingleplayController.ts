interface ModelPair {
    from: RGBModel,
    to: RGBModel
}

class SingleplayActor {
    readonly cardsPanel = new CardsPanel();
    constructor(
        public from: RGBModel,
        public to: RGBModel
    ) { }
}

type SingleplayActorType = 'player' | 'AI';

class SingleplayController {
    readonly player: SingleplayActor;
    readonly AI: SingleplayActor;
    constructor() {
        const playerTo = getRandomRGB();
        const playerFrom = getRandomBoundRGB(playerTo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.player = new SingleplayActor(playerFrom, playerTo);
        const AITo = getRandomRGB();
        const AIFrom = getRandomBoundRGB(AITo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.AI = new SingleplayActor(AIFrom, AITo);
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
        const actor = this.getActor(actorType);
        const card = actor.cardsPanel.getCard(id);


    }
    private getActor(actor: SingleplayActorType): SingleplayActor {
        return actor === 'player' ? this.player : this.AI;
    }

}