function getNames(objArray) {
  let results = [];

  for (x in objArray) {
    if (Object.keys(objArray[x]).includes("name")) {
      results.push(objArray[x]);
    }
  }

  console.log(results);
}

getNames([
  { a: 1 },
  { name: "Jane" },
  {},
  { name: "Mark" },
  { name: "Sophia" },
  { b: 2 },
]);
