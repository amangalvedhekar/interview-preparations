import {buildHashTableFromArray} from './findAnagram';

export const repeatedElements = arr => {
  let countTable = buildHashTableFromArray(arr);
  return Object
    .keys(countTable)
    .filter(num => countTable[num] > 1);
};