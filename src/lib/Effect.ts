abstract class Effect {
    readonly id: string = crypto.randomUUID();
    constructor(
        readonly name?: string,
        readonly description?: string,
    ) { }
    abstract run(...args: unknown[]): unknown;
}

abstract class RGBEffect extends Effect {
    abstract run(model: RGBModel): RGBModel;
}

abstract class ActionEffect extends Effect {
    // abstract run(...args: unknown[]): unknown;
}

