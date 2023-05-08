type BaseColor = 'r' | 'g' | 'b';

type BaseColorDict = { [k in BaseColor]: number };

const { createSimpleRGBEffect } = (() => {

    function getRandomElement<T>(array: T[]) {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    function getRandomBaseColor(): BaseColor {
        return getRandomElement(['r', 'g', 'b']);
    }

    const increaseNames = ['Поднять', 'Увеличить', 'Повысить', 'Возвысить', 'Преумножить', 'Вознести', 'Вырастить'];

    function getIncreaseName() {
        return getRandomElement(increaseNames);
    }

    const decreaseNames = ['Уменьшить', 'Уронить', 'Потерять', 'Упустить', 'Понизить', 'Профукать', 'Выбросить', 'Выкинуть', 'Убавить', 'Убрать'];

    function getDecreaseName() {
        return getRandomElement(decreaseNames);
    }

    const targetedNamesDict = {
        r: ['красность', 'красноту', 'красноподобие', 'красноватость', 'РЭД', 'красный цвет'],
        g: ['зелень', 'зелёность', 'зеленоту', 'уровень зелёного', 'зеленистость', 'зеленообразие'],
        b: ['синесть', 'синеватость', 'синий', 'цвет неба и моря', 'синь', 'синеву']
    };

    function getTargetedName(color: BaseColor) {
        const names = targetedNamesDict[color];
        return getRandomElement(names);

    }

    function increaseByCoef(model: RGBModel, k: number, color: BaseColor) {
        const { r, g, b } = { ...model, ...{ [color as BaseColor]: model[color] * k } as BaseColorDict };
        return new RGBModel(r, g, b);
    }

    function increaseByNumber(model: RGBModel, d: number, color: BaseColor) {
        const { r, g, b } = { ...model, ...{ [color as BaseColor]: model[color] + d } as BaseColorDict };
        return new RGBModel(r, g, b);
    }

    function createSimpleRGBEffect() {
        const dir = Math.random() > 0.5 ? 1 : -1;
        const mode = Math.random() > 0.5 ? 'c' : 'n';
        const baseColor = getRandomBaseColor();
        let name: string, description: string, effectFn: (model: RGBModel) => RGBModel, deltaDescription: string;
        if (mode === 'n') {
            const value = +(Math.random() * MAX_RGB_INCREASE_BY_NUMBER_DELTA).toFixed();
            effectFn = (model: RGBModel) => increaseByNumber(model, value * dir, baseColor);
            deltaDescription = `${value}`;
        } else {
            const value = +(Math.random() * MAX_RGB_INCREASE_BY_COEFF_DELTA * dir).toFixed() / 100 + 1;
            effectFn = (model: RGBModel) => increaseByCoef(model, value, baseColor);
            deltaDescription = `${value}%`;
        }
        if (dir === 1) {
            name = `${getIncreaseName()} ${getTargetedName(baseColor)}`;
            description = `Увеличивает ${getTargetedName(baseColor)} на ${deltaDescription}`;
        } else {
            name = `${getDecreaseName()} ${getTargetedName(baseColor)}`;
            description = `Уменьшает ${getTargetedName(baseColor)} на ${deltaDescription}`;
        }
        return new RGBEffect(effectFn, name, description);
    }

    return { createSimpleRGBEffect };

})();