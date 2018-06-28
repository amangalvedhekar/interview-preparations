/**
 *
 * @param {array} arr
 * @returns {number}
 */
const getMinimumValue = (arr) => arr
    .reduce((elm, acc) => Math.min(elm, acc),  arr[0]);

/**
 *
 * @param {array} arr
 * @returns {number}
 */
const getMaximumValue = (arr) => arr
    .reduce((elm, acc) => Math.max(elm, acc),  arr[0]);

/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {[number]}
 */
const generateNumbers = (start, end) => [...Array(end-start+1).keys()]
    .map(number => number+start);


const sumAll =  (arr) => {
    const minimumValue = getMinimumValue(arr);
    const maximumValue = getMaximumValue(arr);
    const numberRange = generateNumbers(minimumValue, maximumValue);
    return numberRange
        .reduce((elm, acc) => elm + acc, 0);
};

export {
    getMinimumValue,
    getMaximumValue,
    generateNumbers,
    sumAll,
}