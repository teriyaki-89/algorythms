(function Wrapper() {
    let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

    const binarySearch = (list: Array<number>, item: number) => {
        let low = 0;
        let high = list.length - 1;
        let result: string | number = "no match";
        while (low <= high) {
            let mid = Math.round((high + low) / 2);
            let guess = list[mid];
            if (guess == item) {
                return (result = mid);
            } else if (guess > item) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    };

    //let check = binarySearch(exampleArray, -1);
    let check = binarySearch(exampleArray, 41);
    console.log(check);
})();
