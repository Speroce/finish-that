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
        readonly deltaString: string,
        readonly name?: string,
        readonly description?: string,
    ) { 
        super(run, name, description);
    }
    get sign(): RGBSign {
        const model = new RGBModel(128, 128, 128);
        const effected = this.run(model);
        return RGBModel.sign(model, effected);
    }
}

class ActionEffect extends Effect {
    // abstract run(...args: unknown[]): unknown;
}

