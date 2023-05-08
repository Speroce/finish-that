const { Quadras, Qu } = (() => {

    const Qu: React.FC<{ bgColor: string }> = ({ bgColor }) => {
        const style = useMemo(() => ({ background: bgColor }), [bgColor]);
        return (
            <div className="qu" style={style}></div>
        );
    };

    const Quadras: React.FC = () => {
        return (
            <div className="quadras-container">
                <Qu bgColor="yellow" />
                <Qu bgColor="green" />
                <Qu bgColor="red" />
                <Qu bgColor="blue" />
            </div>
        );
    };

    return { Quadras, Qu };
})();