// O(n^b)
const filterAfterCreated = (data, id) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    } else if (data[i].children) {
      const exists = filterAfterCreated(data[i].children, id);
      if (exists) return exists;
    }
  }
};

module.exports = filterAfterCreated;
