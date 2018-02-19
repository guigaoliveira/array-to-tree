const converter = require("./converter");
const filter = require("./filter");

const arr = [
  { id: 1, parentId: 0 },
  { id: 4, parentId: 2 },
  { id: 3, parentId: 1 },
  { id: 5, parentId: 0 },
  { id: 6, parentId: 0 },
  { id: 2, parentId: 1 },
  { id: 7, parentId: 4 },
  { id: 8, parentId: 1 },
  { id: 10, parentId: 7 }
];

console.log("---------------------");
console.log(filter(arr, 1));
console.log("---------------------");
console.log(JSON.stringify(converter(arr), null, 2));
