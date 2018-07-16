export const translatePigLatin = data => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const dataArray = data.split('');
  const consonants = [];
  dataArray.every(x => {
    if(vowels.indexOf(x) === -1){
      consonants.push(x);
    }
    return vowels.indexOf(x) === -1;
  });
  if(consonants.length === 0) {
    return data + 'way';
  }
  const restWord = data.substring(consonants.length);
  const finalWord = consonants.reduce((a,b) => a+b, '');
  return restWord + finalWord+'ay';
};
