const pairs = (elements) => {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i; j < elements.length; j++) {
      if (elements[i] !== elements[j]) {
        result.push([elements[i], elements[j]]);
      }
    }
  }
  return result;
};


console.log(pairs(["a", "b", "c", "d", "e"]))