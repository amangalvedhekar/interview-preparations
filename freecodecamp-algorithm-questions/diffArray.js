/**
 *
 * @param arr1
 * @param arr2
 * @returns {[]}
 */
export const diffArray = (arr1 = [], arr2 = []) => {
    let uniqueElements = [];
    if (arr1.length !== 0 && arr2.length !== 0) {
        const uniqueElements1 = arr1.filter(elm => arr2.indexOf(elm) === -1);
        const uniqueElements2 = arr2.filter(elm => arr1.indexOf(elm) === -1);
        return uniqueElements1.concat(uniqueElements2);
    } else if (arr1.length === 0) {
        return arr2;
    }else if(arr2.length === 0){
        return arr1;
    }else {
        return uniqueElements;
    }
};
