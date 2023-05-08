const { useState, useCallback, useRef, useMemo } = React;
const { observer } = mobxReact;
const { makeAutoObservable } = mobx;

const App = () => (
    <div className="layout">
        <Quadras />
        {/* <div className="cards-panel first-player-cards-panel">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        <div className="cards-panel second-player-cards-panel">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div> */}
    </div>
);

ReactDOM.render(<App></App>, document.getElementById('app'));
