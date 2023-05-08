const { Quadras, Qu } = (() => {

    const Qu: React.FC<{ bgColor: string }> = ({ bgColor }) => {
        const style = useMemo(() => ({ background: bgColor }), [bgColor]);
        return (
            <div className="qu" style={style}></div>
        );
    };

    const Quadras: React.FC<{
        leftTopColor: string,
        rightTopColor: string,
        leftBottomColor: string,
        rightBottomColor: string
    }> = ({
        leftBottomColor,
        leftTopColor,
        rightBottomColor,
        rightTopColor
    }) => {
            return (
                <div className="quadras-container">
                    <Qu bgColor={leftTopColor} />
                    <Qu bgColor={rightTopColor} />
                    <Qu bgColor={leftBottomColor} />
                    <Qu bgColor={rightBottomColor} />
                </div>
            );
        };

    return { Quadras, Qu };
})();