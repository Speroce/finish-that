const { useState, useCallback, useRef, useMemo } = React;


const App = () => (
    <div className="layout">
        <Quadras />

    </div>
);

ReactDOM.render(<App></App>, document.getElementById('app'));
