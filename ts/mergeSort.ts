function Wrapper() {
  const exampleArray: number[] = [64, 25, 12, 22, 11, 100, 200, 24, 232];

  function merge(left: number[], right: number[]) {
    const result: number[] = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...result, ...left, ...right];
  }

  function mergeSort(array) {
    const half = array.length / 2;
    if (array.length < 2) {
      return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
  }
  const check = mergeSort(exampleArray);
  console.log(check);
}

export default Wrapper();
