/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let st = 0 , ed = nums.length-1 ;
    while(st<ed){
        let mid = Math.floor((st+ed)/2);

        if(nums[mid] < nums[mid+1]){
            st = mid + 1;
        }
        else {
            ed = mid;
        }
    }
    return st
};