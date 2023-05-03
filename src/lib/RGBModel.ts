interface IRGBModel {
    readonly r: number,
    readonly g: number,
    readonly b: number,
    getColorString(): string
}

const { RGBModel } = (() => {
    class RGBModel implements IRGBModel {
        constructor(
            readonly r: number,
            readonly g: number,
            readonly b: number
        ) {
            for (const c of ['r', 'g', 'b'] as const) {
                this[c] > 255 && (this[c] = 255);
            }
        }
        getColorString() {
            return `rgb(${this.r},${this.g},${this.b})` as const;
        }
    }
    return { RGBModel };
})();