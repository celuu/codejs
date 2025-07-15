var isPalindrome = function (x) {
  let string = x.toString();
  for (let i = 0; i < string.length; i++) {
    let j = string.length - 1 - i
    console.log(i, j);
    if (string[i] !== string[j]) {
      return false;
    }
    if (i === j) break
  }
  return true;
};

x = 121
console.log(isPalindrome(x))