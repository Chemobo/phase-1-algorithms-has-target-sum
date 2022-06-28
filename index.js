function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const targetSum =target - array[i];
    for (let num = i+1; num < array.length; num++){
      if(array[num] === targetSum) return true;
      }
  }
      return false;
}
  
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
  module.exports = hasTargetSum;
