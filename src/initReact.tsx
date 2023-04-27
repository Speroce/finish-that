const { useState, useEffect, useCallback, useRef, useMemo } = React;

const getRgb = (x: number, y: number) => {
    return `rgb(${x / 2}, 0, ${y / 2})`;
};

const Colorer = () => {

    const element = useRef<HTMLDivElement>();
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const { top, left } = element.current.getBoundingClientRect();
        setX(clientX - left);
        setY(clientY - top);

    }, []);

    const colorValue = useMemo(() => getRgb(x, y), [x, y]);
    useEffect(() => {
        element.current.style.background = colorValue;
    }, [colorValue]);

    return (
        <div className="colorer" onMouseMove={onMove} ref={element}>
            <div className="color-value">
                {colorValue}
            </div>
        </div>
    )
};

const App = () => (
    <Colorer />
);

ReactDOM.render(<App></App>, document.getElementById('app'));
