const SCALED_MAX = 99;
const SCALED_MIN = 55;

export function scaleValues(object, propertyName) {
    return scaleBetween(SCALED_MIN, SCALED_MAX, object, propertyName);
}

function scaleBetween(scaledMin, scaledMax, object, propertyName) {
    const listOfProps = Object.values(object).map((item) => item[propertyName]);
    const max = Math.max.apply(Math, listOfProps);
    const min = Math.min.apply(Math, listOfProps);
    Object.values(object).forEach((item) => {
        const scaled = (scaledMax - scaledMin) * (item[propertyName] - min) / (max - min) + scaledMin;
        const rounded = Math.round(scaled * 10) / 10;
        item[propertyName] = rounded;
    });
}