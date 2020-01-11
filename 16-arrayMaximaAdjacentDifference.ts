function arrayMaximaAdjacentDifference(inputArray: number[]): number {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximaAdjacentDifference([2, 4, 1, 0]));
