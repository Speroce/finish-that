const { CardView } = (() => {

    const EffectArrow: React.FC<{ isUp: boolean, color: string }> = ({ isUp, color }) => {
        const symbol = useMemo(() => isUp ? '▲' : '▼', [isUp]);
        const style = useMemo(() => (
            {
                color,
                textShadow: '1px 1px rgb(95 35 151)'
            }
        ), [color]);
        return (
            <div className="effect-arrow" style={style}>{symbol}</div>
        );
    };

    const NameView: React.FC<{ effect: Effect }> = ({ effect }) => {
        if (effect instanceof RGBEffect) {
            const { sign } = effect;
            const rArrow = sign.r ? <EffectArrow color="rgb(240 0 75)" isUp={sign.r > 0} key={0} /> : null;
            const gArrow = sign.g ? <EffectArrow color="rgb(60 128 60)" isUp={sign.g > 0} key={1} /> : null;
            const bArrow = sign.b ? <EffectArrow color="rgb(110 60 255)" isUp={sign.b > 0} key={2} /> : null;
            return (
                <div className="card-name">
                    <div className="card-name-container">
                        <div className="card-name-label">
                            {effect.name}
                        </div>
                        <div className="card-name-arrows">
                            {[rArrow, gArrow, bArrow]}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card-name">
                    <div className="card-name-label">
                        {effect.name}
                    </div>
                </div>
            )
        }
    }

    const DescriptionView: React.FC<{ effect: Effect }> = ({ effect }) => {
        if (effect instanceof RGBEffect) {
            return (
                <div className="card-description">
                    {effect.description + ' '}
                    <strong>{effect.deltaString}</strong>
                </div>
            )
        } else {
            return (
                <div className="card-description">
                    {effect.description}
                </div>
            )
        }
    }

    const CardView: React.FC<{
        card: Card,
        gameController: SingleplayController,
        isClickable: boolean
    }> = observer(({ card, gameController, isClickable }) => {
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
                    <NameView effect={card.effect} />
                    <DescriptionView effect={card.effect} />
                </div>
            </div>
        );
    });

    return { CardView };
})();