
export const generateNumbersArray = num => [...Array(num).keys()].map(x => x + 1);

export const generateSquare = numArray => numArray.map(number => number * number);

export const sumAllElements = numArray => numArray.reduce((acc, elm) => acc + elm, 0);

export const diff = (numOne, numTwo) => Math.abs(numOne - numTwo);

export const sumSquareDifference = limit => {
  const numArray = generateNumbersArray(limit);
  const squareArray = generateSquare(numArray);
  const squareSum = sumAllElements(squareArray);
  const arraySum = sumAllElements(numArray);
  const sumSquare = arraySum * arraySum;
  return diff(sumSquare, squareSum);
};