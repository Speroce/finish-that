function getRGBDist(rgb1: RGBModel, rgb2: RGBModel) {
    const deltaR = Math.pow(rgb1.r - rgb2.r, 2);
    const deltaG = Math.pow(rgb1.g - rgb2.g, 2);
    const deltaB = Math.pow(rgb1.b - rgb2.b, 2);
    return Math.sqrt(deltaR + deltaG + deltaB);
}

function getRandomRGB() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return new RGBModel(r, g, b);
}

const getRandomBoundRGB = (() => {

    function getDir(value: number, limit: number) {
        if (value + limit > 255) {
            return -1;
        }
        if (value - limit < 0) {
            return -1;
        }
        return Math.random() > 0.5 ? 1 : -1;
    }

    function getNewValue(min: number, max: number, init: number) {
        const dist = max - min;
        return (Math.random() * dist + min) * getDir(init, max) + init;
    }

    return function (model: RGBModel, min = 0, max = 255) {
        const r = getNewValue(min, max, model.r);
        const g = getNewValue(min, max, model.g);
        const b = getNewValue(min, max, model.b);
        return new RGBModel(r, g, b);
    }
})();

function chooseBetterEffectCardId(fromModel: RGBModel, toModel: RGBModel, cards: Card<RGBEffect>[]) {
    const effects = cards.map(card => card.effect);
    const effectedModels = effects.map(effect => effect.run(fromModel));
    const dists = effectedModels.map(model => getRGBDist(model, toModel));
    const minDist = Math.min(...dists);
    const index = dists.indexOf(minDist);
    return cards[index].id;
}