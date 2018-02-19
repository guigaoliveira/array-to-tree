// O(n)
const arrayToTree = data => {
  const tree = [];
  const childrenOf = new Map();
  data.forEach(obj => {
    const { id, parentId } = obj;
    childrenOf.set(id, childrenOf.get(id) || []);
    const copyObj = { ...obj, children: childrenOf.get(id) };
    if (parentId) {
      childrenOf.set(parentId, childrenOf.get(parentId) || []);
      childrenOf.get(parentId).push(copyObj);
    } else {
      tree.push(copyObj);
    }
  });
  return tree;
};

module.exports = arrayToTree;
