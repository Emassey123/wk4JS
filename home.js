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

