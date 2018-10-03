export const findDiff = (elm, idx, arr) => {
  if (arr[idx + 1] && arr[idx + 1] - elm !== 1) {
    return arr[idx + 1] - arr[0];
  }
};

export const missingNumber = arr => arr.map(findDiff).filter(Boolean);
