class Card {
    readonly id: string = crypto.randomUUID();
    constructor(
        readonly effect: Effect
    ) { }
}

class CardsPanel { 
    get cards() {
        return [...this.cardsMap.values()];
    }
    private cardsMap: Map<string, Card> = new Map();
    addCard(card: Card) {
        this.cardsMap.set(card.id, card);
    }
    removeCard(id: string) {
        this.cardsMap.delete(id);
    }
    getCard(id: string) {
        return this.cardsMap.get(id);
    }
    removeAllCards() {
        this.cardsMap.clear();
    }
}