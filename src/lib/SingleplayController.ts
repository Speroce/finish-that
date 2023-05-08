type SingleplayActorType = 'player' | 'AI';

class SingleplayController {
    readonly player: SingleplayActor;
    readonly AI: SingleplayActor;
    constructor() {
        makeAutoObservable(this);
        const playerTo = getRandomRGB();
        const playerFrom = getRandomBoundRGB(playerTo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.player = new SingleplayActor(playerFrom, playerTo);
        const AITo = getRandomRGB();
        const AIFrom = getRandomBoundRGB(AITo, MIN_RGB_DIST, MAX_RGB_DIST);
        this.AI = new SingleplayActor(AIFrom, AITo);
        this.replaceAllCards(this.player);
        this.replaceAllCards(this.AI);
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
    get currentActorName() {
        return this.moveController.currentActorType === 'player' ? 'Игрок' : 'Компьютер';
    }
    get movesNumber() {
        return this.moveController.movesNumber;
    }
    playerMove(id: string) {
        this.move('player', id);
        this.AImove();
    }
    AImove() {
        const { from, to } = this.AI;
        const { cards } = this.AI.cardsPanel;
        const id = chooseBetterEffectCardId(from, to, cards);
        this.move('AI', id);
    }

    private moveController: SingleplayMoveControlles = new SingleplayMoveControlles();
    private replaceAllCards(actor: SingleplayActor) {
        actor.cardsPanel.removeAllCards();
        for (let i = 0; i < 4; i++) {
            actor.cardsPanel.addCard(createRGBEffectCard());
        }
    }
    private move(actorType: SingleplayActorType, id: string) {
        const actor = this.getActor(actorType);
        this.playCard(actor, id);
        this.replaceAllCards(actor);
        this.moveController.move();
    }
    private checkWinner() {
        const actor = this.getActor(this.moveController.currentActorType);
        if (getRGBDist(actor.from, actor.to) <= VICTORY_DIST) {
            alert(`Победил ${this.currentActorName}!`);
            window.location.reload();
        }
    }
    private playCard(actor: SingleplayActor, id: string) {
        const card = actor.cardsPanel.getCard(id);
        if (!card) {
            throw new Error('Карточка не найдена');
        }
        const { effect } = card;
        actor.cardsPanel.removeCard(id);
        if (effect instanceof RGBEffect) {
            actor.runRGBEffect(effect);
        }
        if (effect instanceof ActionEffect) {
            effect.run();
        }
        this.checkWinner();
    }
    private getActor(actor: SingleplayActorType): SingleplayActor {
        return actor === 'player' ? this.player : this.AI;
    }

}