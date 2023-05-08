class SingleplayMoveControlles {
    get currentActorType() {
        return this._currentActorType;
    }
    get movesNumber() {
        return this._movesNumber;
    }
    move() {
        this._currentActorType = this._currentActorType === 'player' ? 'AI' : 'player';
        this._movesNumber++;
    }

    private _currentActorType: SingleplayActorType = 'player';
    private _movesNumber =  0;
}