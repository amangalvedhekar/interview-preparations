const assert = require('chai').assert;
const expect = require('chai').expect;
import {
  sumSquareDifference,
  generateNumbersArray
} from "./sum-square-dfifference";

const numSequence = () => {
  const actualArray = generateNumbersArray(4);
  const expectedArray = [1, 2, 3, 4];
  assert.deepEqual(actualArray, expectedArray);
};

describe("Difference between square of sum and sum square",
  () => {
    it("should calculate the difference");
  });

describe("generate array of number sequence",
  () => {
    it(
      "should generate sequence",
      numSequence
    );
  });