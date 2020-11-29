(function Wrapper() {
    const exampleArray: number[] = [2, 4, 6];

    const recursionSum = (sum: number, arr: Array<number>) => {
        if (arr.length == 0) return sum + 0;
        const nextSum = sum + arr[0];
        // arr.splice(0,1);
        // return recursionSum(nextSum, arr);
        return recursionSum(nextSum, arr.slice(1));
    };

    const check = recursionSum(0, exampleArray);
    console.log(check);
})();
