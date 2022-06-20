function Wrapper() {
  const exampleArray: number[] = [6, 2, 4, 10];
  const sorted = sortArr(exampleArray);
  let pairs = [];
  let minDiff = sorted[1] - sorted[0];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; i < sorted.length; i++) {
      if (sorted[j] - sorted[i] < minDiff) {
        minDiff = sorted[j] - sorted[i];
        pairs = [[sorted[i], sorted[j]]];
      } else if (sorted[j] - sorted[i] == minDiff) {
        pairs.push([ sorted[i], sorted[j] ])
      }
    }
  }
  console.log(pairs);
}

export default Wrapper();

function sortArr(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let pos = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        pos = j;
      }
    }
    let c = arr[pos];
    arr[pos] = arr[i];
    arr[i] = c;
  }
  return arr;
}
