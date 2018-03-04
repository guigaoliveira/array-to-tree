// O(n^2)

// recursive solution (possible when TCO is implemented)

/* 
const searchParents = ({ parentId }, array, aux = [], count = array.length) => {
  const itemWithParentId = array.find(
    ({ id }) => parentId && id && id === parentId
  );
  return count === 0
    ? aux
    : searchParents(
        itemWithParentId,
        array,
        itemWithParentId ? [...aux, itemWithParentId] : aux,
        count - 1
      );
};
const searchParentsOfNode = (arr, parentId) => searchParents({ parentId }, arr);
*/

const findItemByParentId = (array, parentId) =>
  array.find(({ id }) => id && id === parentId);

const searchParentsOfNode = (array, parentId) =>
  array.reduce(
    item => {
      const itemWithParentId = findItemByParentId(array, item[0].parentId);
      return itemWithParentId ? [itemWithParentId, ...item] : [...item];
    },
    [findItemByParentId(array, parentId)]
  );
