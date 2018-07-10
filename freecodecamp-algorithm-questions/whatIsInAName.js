/**
 *
 * @param {array} collection
 * @param {object} source
 */
const whatIsInAName = (collection, source) =>{
    const sourceKeys = Object.keys(source);

    return collection.filter(object => sourceKeys.every(key => object[key] === source[key]));
};
export default {
    whatIsInAName,
};
