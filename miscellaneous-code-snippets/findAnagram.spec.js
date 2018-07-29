const assert = require('chai').assert;
const expect = require('chai').expect;

import {
  buildArrayFromString,
  buildHashTableFromArray,
  compareHashTables,
  findAnagram,
} from './findAnagram';

const firstWord = 'abcd';
const secondWord = 'efgh';
const arrayForHash = ['a', 'a', 'b', 'b', 'z', 'z', 'z', 'f', 'f', 'f', 'f', 'f', 'f', 'i'];
const hashTableActualValue = {
  a: 2,
  b: 2,
  z: 3,
  f: 6,
  i: 1
};

const hashTableExpectedValue = {
  a: 2,
  b: 2,
  z: 3,
  f: 6,
  i: 1
};
const actualValue = ['a', 'b', 'c', 'd'];

const characterArray = () => {

  const expectedValue = buildArrayFromString(firstWord);

  assert
    .deepEqual(
      expectedValue,
      actualValue,
    );
};

const characterHashTable = () => {
  const expectedValue = buildHashTableFromArray(arrayForHash);

  assert
    .deepEqual(
      expectedValue,
      hashTableActualValue
    );
};

const hashTableComparison = () => {
  const isMatch = compareHashTables(
    hashTableActualValue,
    hashTableExpectedValue,
  );

  assert.equal(isMatch, true);
};

const isAnagram = () => {
  assert.equal(findAnagram('abaa', 'aabb'), false);
};

describe('split string to array of characters', () => {

  it(
    'should return array with element as character from given string',
    characterArray,
  );
});

describe('build hash table for chars', () => {

  it(
    'should return hash table with key as characters and value as its count',
    characterHashTable,
  );
});

describe('compare hash tables', () => {
  it(
    'should return boolean value for two hash table comparison',
    hashTableComparison,
  );
});

describe('check whether words provided are anagram', () => {
  it(
    'should return true if provided arguments are anagram',
    isAnagram,
  );
});
