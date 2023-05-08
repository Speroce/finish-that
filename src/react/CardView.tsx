const { CardView } = (() => {

    const CardView: React.FC<{
        card: Card,
        gameController: SingleplayController,
        isClickable: boolean
    }> = ({ card, gameController, isClickable }) => {
        const playCard = useCallback(() => {
            gameController.playerMove(card.id);
        }, [card.id]);
        const callback = useMemo(
            () => isClickable ? playCard : void 0,
            [isClickable]
        );
        return (
            <div className="card" onClick={callback}>
                <div className="card-container">
                    <div className="card-name">
                        {card.effect.name}
                    </div>
                    <div className="card-description">
                        {card.effect.description}
                    </div>
                </div>
            </div>
        );
    };

    return { CardView };
})();