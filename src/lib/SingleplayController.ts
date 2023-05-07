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
        if (!card) {
            throw new Error('Карточка не найдена');
        }
        const { effect } =  card;
        actor.cardsPanel.removeCard(id);
        if (effect instanceof RGBEffect) {
            actor.runRGBEffect(effect);
        }
        if (effect instanceof ActionEffect) {
            effect.run();
        }

    }
    private getActor(actor: SingleplayActorType): SingleplayActor {
        return actor === 'player' ? this.player : this.AI;
    }

}