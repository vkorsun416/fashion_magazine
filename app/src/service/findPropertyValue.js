export default function findPropertyValue(propArr, valueType) {

    for (let key in propArr) {

        let currentProp = propArr[key].property ? propArr[key].property : propArr[key].image;
        let currentValue = propArr[key].value ? propArr[key].value : propArr[key].url;

        if (String(currentProp).toLowerCase() === valueType) {
            return currentValue;
        }
    }
}