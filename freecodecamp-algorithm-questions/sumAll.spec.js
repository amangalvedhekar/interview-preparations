const assert = require('chai').assert;

import {
    getMinimumValue,
    getMaximumValue,
    generateNumbers,
    sumAll
} from './sumAll';

const minimumNumberFromArray = () => {
    const actualValue = getMinimumValue([1,2]);
    const expectedValue = 1;
    assert.equal(actualValue, expectedValue);
};

const maximumNumberFromArray = () => {
    const actualValue = getMaximumValue([1,2]);
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
};

const numberRangeGenerated = () => {
    const actualValue = generateNumbers(1,9);
    const expectedValue = [1,2,3,4,5,6,7,8,9];
    assert.deepEqual(actualValue, expectedValue);
};

const sumForSequenceNumbers = () => {
    const actualValue = sumAll([1,4]);
    const expectedValue = 10;
    assert.equal(actualValue, expectedValue);
};

describe('sumAll', () => {

    it('should return minimum value for an array',
        minimumNumberFromArray,
    );

    it('should return maximum value for an array',
        maximumNumberFromArray,
    );

    it('should return an array with sequence of numbers generated',
        numberRangeGenerated,
    );

    it('should return sum for sequence of numbers',
        sumForSequenceNumbers
    );
});