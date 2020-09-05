
export function scaleValues(object, propertyName) {
    let
        max = Number.MAX_VALUE * -1,
        min = Number.MAX_VALUE;
    Object.keys(object).forEach((key) => {
        const property = object[key][propertyName];
        if (property < min) {
            min = property;
        }
        if (property > max) {
            max = property;
        }
    });
    Object.keys(object).forEach((key) => {
        object[key][propertyName] = Math.round(10000 * (object[key][propertyName] - min) / (max - min)) / 100;
    });
}
