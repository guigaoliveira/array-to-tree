// O(n)
const filter = (data, id) => {
  const obj = new Set();
  const result = [
    ...data.filter(
      item => (item.parentId === id || item.id === id) && obj.add(item.id)
    ),
    ...data.filter(
      item => obj.has(item.parentId) && item.parentId !== id && obj.add(item.id)
    )
  ];
  return result;
};

module.exports = filter;
