/**
 * @param {number[]} nums
 * @return {number}
 */

var shuffle = function(nums, n) {
    let newArr = []
   for(let i=0;i<n;i++){
      newArr.push(nums[i] , nums[n+i]);
   }
   return newArr 
};