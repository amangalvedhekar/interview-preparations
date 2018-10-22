
let createNumHash = arr => {
  let numHash = {};
  arr.forEach((num, idx) => {
    numHash[num] = idx;
  });
  return numHash;
};

export let searchInsert = (arr, numb) => {
  let hashTable = createNumHash(arr);
  let target = hashTable[numb];
  if(typeof target === 'undefined') {
    numb < arr[0] ? target = 0 : numb > arr[arr.length - 1] ? target = arr.length :
      target = Object.keys(hashTable).map((n, i) => {
        if(numb > n && numb < arr[i+1]) {
          return i+1;
        }
      }).filter(Number)[0];
  }
  return target;
};
