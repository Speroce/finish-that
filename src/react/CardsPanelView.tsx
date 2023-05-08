const { CardsPanelView } = (() => {

    const CardsPanelView: React.FC<{
        panel: CardsPanel,
        playerNumber: 'first' | 'second',
        gameController: SingleplayController
    }> = observer(({ panel, playerNumber, gameController }) => {
        const className = useMemo(
            () => `cards-panel ${playerNumber}-player-cards-panel`,
            [playerNumber]
        );
        const isClickable = useMemo(
            () => playerNumber === 'first',
            [playerNumber]
        );
        const cards = panel.cards.map(
            card => (
                <CardView
                    card={card}
                    key={card.id}
                    gameController={gameController}
                    isClickable={isClickable}
                />
            )
        );
        return (
            <div className={className}>
                {cards}
            </div>
        );
    });

    return { CardsPanelView };
})();