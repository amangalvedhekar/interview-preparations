const assert = require('chai').assert;
const expect = require('chai').expect;

import {
    getMinimumValue,
    getMaximumValue,
    generateNumbers,
} from './sumAll';

const minimumNumberFromArray = () => {
    const actualValue = getMinimumValue([1,2]);
    const expectedValue = 1;
    assert.equal(actualValue, expectedValue);
};

describe('sumAll', () => {
    it('should return minimum value for an array',
        minimumNumberFromArray
    );
});