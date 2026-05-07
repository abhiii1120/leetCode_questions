var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 0;
        }
    }

    return max;
};