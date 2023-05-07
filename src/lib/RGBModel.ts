class RGBModel {
    constructor(
        readonly r: number,
        readonly g: number,
        readonly b: number
    ) {
        for (const c of ['r', 'g', 'b'] as const) {
            this[c] > 255 && (this[c] = 255);
            this[c] < 0 && (this[c] = 0);
        }
    }
    getColorString() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
}