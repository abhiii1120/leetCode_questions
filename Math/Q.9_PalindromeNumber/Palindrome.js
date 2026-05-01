/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseNum = 0;
     let initialNum = x;
    if(x<0){
        return false;
    }
    while(x!=0){
        reverseNum = reverseNum*10 + x%10
        x=Math.floor(x/10)
    }
    return initialNum == reverseNum;
};