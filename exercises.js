
export function flattening(list) {
    return list.reduce((acc, curr) => acc.concat(curr), []);
}

export function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}

export function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

export function everySome(array, test) {
    return array.every(test);
}