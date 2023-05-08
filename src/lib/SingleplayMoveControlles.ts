class SingleplayMoveControlles {
    get currentActorType() {
        return this._currentActorType;
    }
    get movesNumber() {
        return this._movesNumber;
    }
    move() {
        this._currentActorType = this._currentActorType === 'player' ? 'AI' : (this._movesNumber++, 'player');
    }

    private _currentActorType: SingleplayActorType = 'player';
    private _movesNumber = 0;
}