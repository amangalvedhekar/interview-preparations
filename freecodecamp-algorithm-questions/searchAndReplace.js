const characterCase = character => /[a-z]/.test(character) ? 'lowercase' :
  'uppercase';

const caseConversion = (character, toCase) => toCase === 'lowercase' ?
  character.toLowerCase() : character.toUpperCase();

const myReplace = (str, before, after) => {
  const strArray = str.split(' ');
  const firstCharacterCase = characterCase(before.charAt(0));
  return strArray.map(word => {
    if (word === before) {
      return caseConversion(
        after.charAt(0),
        firstCharacterCase,
      )
        .concat(after.substring(1));
    } else {
      return word;
    }
  })
    .reduce((acc, elm) => acc + elm + ' ', '')
    .trim();
};

export {
  myReplace,
}
