// Easy

// Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const array = [2,3,3,5,7,10];
let sum = 0;
const averageChecker = (x) => {
    for(i = 0; i < x.length; i++){
        sum += x[i] / x.length;
    }
    return sum
} 

console.log(averageChecker(array));


// Medium 

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0

// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3

// // Output: -1.


const targretValChecker = (array,targetValue) => {
            return array.indexOf(targetValue);   
};

let array1 = [4, 5, 6, 0, 1, 2];

console.log(targretValChecker(array1, 5));

// Very Hard 

// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 

// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1

// sort coins from largest to smallest
// three quarters = 75 
// 96-75=21
// 2 dimes = 20
// 21-20=1
// 1 penny = 1cent 
// [25,10,1]      amount = 96

const coinChecker = (arr, amount) => {
   sortedArray = arr.sort().reverse();
//    [25,10,1]
    //    assingning sum to 0
    let sum = 0;
    
    // looping through the array
   for(i = 0; i < arr.length; i++){   
    //  at first arr[i] = 25 
     sum += Math.floor(amount / arr[i])
    //  sum = 96/25 on the first loop and is rounded down to = "3"
    // sum = 96/25 on the first loop and is rounded down to = "3"
    // sum = 96/25 on the first loop and is rounded down to = "3"
   }
   return sum
}
const array3 = [25,10,1];  // []
console.log(coinChecker(array3, 96));