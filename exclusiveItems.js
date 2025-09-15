const exclusiveItems = (a, b) => {
  let hash = {};
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    let current = b[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  console.log(hash)
  for (item in hash) {
    console.log(hash[item])
  }
  return result;
};


console.log(exclusiveItems([4,2,1,6], [3,6,9,2,10]))