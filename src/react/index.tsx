const App = observer(() => {
    const [gameController] = useState(new SingleplayController());
    return (
        <div className="layout">
            <Quadras 
                leftTopColor={gameController.leftTop.getColorString()}
                leftBottomColor={gameController.leftBottom.getColorString()}
                rightTopColor={gameController.rightTop.getColorString()}
                rightBottomColor={gameController.rightBottom.getColorString()}
            />
            <CardsPanelView
                gameController={gameController}
                panel={gameController.player.cardsPanel}
                playerNumber="first"
            ></CardsPanelView>
            <CardsPanelView
                gameController={gameController}
                panel={gameController.AI.cardsPanel}
                playerNumber="second"
            ></CardsPanelView>
        </div>
    )
});

ReactDOM.render(<App></App>, document.getElementById('app'));
