import {
  diffArray,
  seekAndDestroy,
  sumAll,
  whatIsInAName,
  spinalTapCase,
  translatePigLatin,
} from './freecodecamp-algorithm-questions';

console.log(sumAll([1, 4]));
console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5, 6]));
console.log(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3));
console.log(whatIsInAName(
  [
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 },
    { "bat": 2 }
  ],
  { "apple": 1, "bat": 2 }
));

console.log(spinalTapCase('Teletubbies say Eh-oh'));

console.log(translatePigLatin('algorithm'));
