export const seekAndDestroy = (arr, ...elementsToDelete) => arr
    .filter(elm => elementsToDelete.indexOf(elm) === -1);
