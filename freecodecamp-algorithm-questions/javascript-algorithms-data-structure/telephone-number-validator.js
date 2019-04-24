const COUNTRY_CODE = 1;
const PHONE_LENGTH_WITH_CODE = 13;
const PHONE_LENGTH_WITHOUT_CODE = 12;
const REGEX = /^[0-9()-]*$/i;

const telephoneValidator = number => {
  const numberArray = number.split("");
  if (REGEX.test(number)) {
    return true;
  }
  if (number.length === PHONE_LENGTH_WITH_CODE) {
    return numberArray[0] === COUNTRY_CODE;
  }
  return false;
};