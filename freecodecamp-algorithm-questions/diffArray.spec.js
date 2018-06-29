const assert = require('chai').assert;
const expect = require('chai').expect;

import { diffArray } from './diffArray';

const incorrectParameters = () => {
    const actualValue = diffArray();
    const expectedValue = [];
    assert.deepEqual(actualValue, expectedValue);
};

const arrayOfSameSize = () => {
    const arr1 = [1,2,3,4,5];
    const arr2 = [1,2,3,6,5];
    const actualValue = diffArray(arr1, arr2);
    const expectedValue = [4,6];
    expect(expectedValue).to.be.an('array');
    assert.deepEqual(actualValue, expectedValue);
};

const emptyParameter = () => {
   const arr1 =[];
   const arr2 = [1,2,3,4];
   const expectedValue = diffArray(arr1, arr2);
   const actualValue = arr2;

   assert.deepEqual(expectedValue, actualValue);
};

describe('Unique element between two array',  () => {
    it(
        'should return an empty array for incorrect parameters',
        incorrectParameters
    );

    it(
        'should return unique element between two array of equal size',
        arrayOfSameSize
    );

    it('should return non emtpy array if one of the parameters is empty',
        emptyParameter
    );
});