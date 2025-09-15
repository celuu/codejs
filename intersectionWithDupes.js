const intersectionWithDupes = (a, b) => {
  let hash = {};
  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  let result = [];
  for (let i = 0; i < b.length; i++) {
    let current = b[i];
      if (hash[current] > 0) {
        result.push(current);
        hash[current] -= 1;
      } 
  }
  return result;
};


console.log(intersectionWithDupes(
  ["a", "b", "c", "b"], 
  ["x", "y", "b", "b"]
))