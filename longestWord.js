const longestWord = (sentence) => {
  let split = sentence.split(" ");
  let longestWord = "";
  let lengthOfWord = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i].length >= lengthOfWord) {
      longestWord = split[i];
      lengthOfWord = split[i].length;
    }
    
  }
  console.log(lengthOfWord)
  return longestWord;
};


long = longestWord("the quick brown fox jumped over the lazy dog");

console.log(long)