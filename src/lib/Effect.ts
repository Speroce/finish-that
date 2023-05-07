abstract class Effect {
    readonly id: string = crypto.randomUUID();
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        public run: (...args: any[]) => any,
        readonly name?: string,
        readonly description?: string,
    ) { }
    // abstract run(...args: unknown[]): unknown;
}

class RGBEffect extends Effect {
    constructor(
        public run: (model: RGBModel) => RGBModel,
        readonly name?: string,
        readonly description?: string,
    ) { 
        super(run, name, description);
    }
}

class ActionEffect extends Effect {
    // abstract run(...args: unknown[]): unknown;
}

