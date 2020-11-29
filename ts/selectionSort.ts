(function Wrapper() {
    const exampleArray: number[] = [64, 25, 12, 22, 11];

    function findMinimal(arr) {
        let smallest = arr[0];
        let smallest_index = 0;
        arr.map((item, index) => {
            if (item < smallest) {
                smallest = item;
                smallest_index = index;
            }
        });

        return smallest_index;
    }

    const selectionSort = (arr: Array<number>) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let smallest = findMinimal(arr);
            newArr.push(arr[smallest]);
            delete arr[smallest];
        }
        return newArr;
    };

    let check = selectionSort(exampleArray);
    console.log(check);
})();
