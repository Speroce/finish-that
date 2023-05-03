const { Quadras, Qu } = (() => {

    const Qu: React.FC<{ index: number, bgColor: string }> = ({ index, bgColor }) => {
        const id = useMemo(() => `qu-${index}`, [index]);
        const style = useMemo(() => ({ background: bgColor }), [bgColor]);
        return (
            <div className="qu" id={id} style={style}></div>
        );
    };

    const Quadras: React.FC = () => {
        return (
            <div className="quadras-container">
                <Qu index={0} bgColor="yellow" />
                <Qu index={1} bgColor="green" />
                <Qu index={2} bgColor="red" />
                <Qu index={3} bgColor="blue" />
            </div>
        );
    };

    return { Quadras, Qu };
})();