const assert = require('chai').assert;
const expect = require('chai').expect;

import {missingLetter} from './missing-letters';

const missingLetterPositiveTest = () => {
  const expectedAlphabet = missingLetter("abce");
  expect(expectedAlphabet).to.be.a("string");
  assert.deepEqual("d", expectedAlphabet);
};
const missingLetterNegativeTest = () => {
  const expectedAlphabet = missingLetter("abcde");
  expect(expectedAlphabet).to.be.undefined;
};

describe("Missing Letter", () => {
  it(
    "should return missing letter from the sequence",
    missingLetterPositiveTest
  );
  it(
    "should return undefined if the sequence doesnt have missing letter",
    missingLetterNegativeTest
  );
});