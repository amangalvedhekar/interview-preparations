/**
 * break first and second word in to characters array
 * count the occurrence of each character and create hash table
 * if the character and its count match its anagram else its not
 * @param {string} firstWord
 * @param {string} secondWord
 */
const findAnagram = (firstWord = '', secondWord = '') => {
  let isAnagram = false;

  //return early if either one of the param is empty string
  if (firstWord === '' || secondWord === '') {
    return isAnagram;
  }

  //create array with each character from the words
  const firstWordArray = buildArrayFromString(firstWord);
  const secondWordArray = buildArrayFromString(secondWord);

  //hash table with character and its count
  const firstWordHashTable = buildHashTableFromArray(firstWordArray);
  const secondWordHashTable = buildHashTableFromArray(secondWordArray);

  return compareHashTables(
    firstWordHashTable,
    secondWordHashTable,
  );
};

/**
 *
 * @param word
 * @returns {string[]}
 */
const buildArrayFromString = word => word.split('');

/**
 *
 * @param {string[]} arrayOfChars
 * @returns {object}
 */
const buildHashTableFromArray = arrayOfChars => {
  let charHashTable = {};
  arrayOfChars.forEach(character => {
    if (charHashTable[character]) {
      charHashTable[character] += 1;
    } else {
      charHashTable[character] = 1;
    }
  });
  return charHashTable;
};


/**
 *
 * @param {object} firstHashTable
 * @param {object} secondHashTable
 * @returns {boolean}
 */
const compareHashTables = (
  firstHashTable = {},
  secondHashTable = {}
) => {
  if (
    Object.keys(firstHashTable).length !==
    Object.keys(secondHashTable).length
  ) {
    return false;
  }
  const isMatch = Object
    .keys(firstHashTable)
    .map(char => {
      let hashTablesMatch = false;
      if (secondHashTable[char]) {
        if (firstHashTable[char] === secondHashTable[char]) {
          hashTablesMatch = true;
        }
      }
      return hashTablesMatch;
    });

  return isMatch.every(match => match);
};


export {
  buildArrayFromString,
  buildHashTableFromArray,
  compareHashTables,
  findAnagram,
};
