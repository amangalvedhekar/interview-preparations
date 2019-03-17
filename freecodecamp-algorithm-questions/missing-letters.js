const alphabets = [...'abcdefghijklmnopqrstuvwxyz']; //generate an array of alphabets

/**
 *
 * @param {string}input
 * @returns {string|undefined}
 * @desc takes string of characters and returns missing letter from the sequence
 * @example missingLetter("abce") returns d
 */
export const missingLetter = input => {
  const inputArray = input.split("");
  const startAlphabet = input.split("")[0];
  const endAlphabet = input.split("")[input.length - 1];
  const indexS = alphabets.findIndex(x => x === startAlphabet);
  const indexE = alphabets.findIndex(x => x === endAlphabet);
  const subArray = alphabets.slice(indexS, indexE+1);
  const missingLetter = subArray.filter(alphabet => !inputArray.includes(alphabet));
  return missingLetter[0] || undefined;
};
