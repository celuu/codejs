// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// };
// This has a time complexity of O of N squared where n is the length of the Array
// Space complexity of n the length of the Array


const twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let toFind = target - current;
    if (hash.hasOwnProperty(toFind)) {
      return [hash[toFind], i];
    }
    hash[current] = i;
  }
}

nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target))