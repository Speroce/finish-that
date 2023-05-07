class Card<E extends Effect = Effect> {
    readonly id: string = crypto.randomUUID();
    constructor(
        readonly effect: E
    ) { }
}

class CardsPanel<E extends Effect = Effect> { 
    get cards() {
        return [...this.cardsMap.values()];
    }
    private cardsMap: Map<string, Card<E>> = new Map();
    addCard(card: Card<E>) {
        this.cardsMap.set(card.id, card);
    }
    removeCard(id: string) {
        this.cardsMap.delete(id);
    }
    getCard(id: string) {
        return this.cardsMap.get(id);
    }
}