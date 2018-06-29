const assert = require('chai').assert;
import { seekAndDestroy} from './seekAndDestroy';

const seekDestroy = () => {
    const seek = [1, 2, 3, 1, 2, 3];
    const expectedValue = seekAndDestroy(seek, 2,3);
    const actualValue = [1,1];

    assert.deepEqual(expectedValue, actualValue);
};

describe('seek and destroy', () => {
    it(
        'should return elements not present in second array',
        seekDestroy
    );
});