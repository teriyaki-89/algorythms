(function Wrapper() {
    const exampleArray: number[] = [64, 25, 12, 22, 11, 100, 200, 24, 232];

    function quickSort(array: number[]) {
        if (array.length < 2) {
            return array;
        } else {
            //const index: number = Math.ceil(Math.random() * (array.length - 1));
            const index: number = Math.ceil(array.length / 2);
            const pivot: number = array[index];
            const lesser: number[] = [],
                greater: number[] = [];
            for (let i = 0; i < array.length; i++) {
                if (i == index) continue;
                if (array[i] < pivot) {
                    lesser.push(array[i]);
                } else {
                    greater.push(array[i]);
                }
            }
            return quickSort(lesser).concat([pivot]).concat(quickSort(greater));
        }
    }
    const check: number[] = quickSort(exampleArray);
    console.log(check);
})();
