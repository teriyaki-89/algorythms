(function Wrapper() {
    let exampleArray: number[] = [1, 245, 39, 2, 39, 434, 245, 3, 23, 3, 1, 2, 434, Infinity, Infinity];
    const outArr = [];

    exampleArray.reduce((result: { number; counter: number }[], current) => {
        if (result[current]) {
            delete result[current];
        } else {
            result[current] = { number: current, counter: 1 };
        }
        return result;
    }, outArr);
    console.log(outArr);
})();
