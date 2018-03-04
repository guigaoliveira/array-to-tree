// O(n^2)

// recursive solution (possible when TCO is implemented)

/* 
const searchParents = ({ parentId }, array, aux = [], n = array.length) => {
  const arrItem = array.find(({ id }) => def && id && id === parentId);
  return n === 0
    ? aux
    : searchParents(arrItem, array, arrItem ? [...aux, arrItem] : aux, n - 1);
};
const searchParentsOfNode = (arr, parentId) => searchParents({ parentId }, arr);
*/

const findValueByParentId = (array, parentId) =>
  array.find(({ id }) => id && id === parentId);

const searchParentsOfNode = (array, parentId) =>
  array.reduce(
    curr => {
      const arrItem = findValueByParentId(array, curr[0].parentId);
      return arrItem ? [arrItem, ...curr] : [...curr];
    },
    [findValueByParentId(array, parentId)]
  );
