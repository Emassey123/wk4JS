// Easy

// Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const array = [2,3,3,5,7,10];
let sum = 0;
// creating a function that takes in an array
const averageChecker = (arr) => {
    // the function then loops through the array
    for(i = 0; i < arr.length; i++){
        // while looping through the array the functiion adds the value of all the index's in the array and divides them by the array's length (how to get the average) and logs the answer to the sum variable
        sum += arr[i] / arr.length;
    }
    // the function then raetruns the value of sum
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
    // indexOf already returns "-1" if the value passed through isn't in the array so this is just returning whatever the value of the regular indexOf function is within my created function
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
    // here we are sorting the array in decsending order so it starts with the largest coin firt and works it's way down
   sortedArray = arr.sort().reverse();
//    [25,10,1]
    //   numCoins is going to be the sum of the "target amount divided by the array index (value of a coin")
    let numCoins = 0;                                                 
    // balance is going to be the actual number of coins needed to get to the target value 
    let balance = 0;
    // here we are manipulating the amount variable to become the value of the remainder variable in the function
    let remainder = amount;
    // looping through the array
   for(i = 0; i < arr.length; i++){   
    //    here we are using the math floor method to get the largest whole number from the sum of the equation
    // we are dividing the traget amount by the array's index which will be the value of coins
     numCoins = Math.floor(remainder / arr[i])
    //  we then add the value of numCoins to the balance so it keeps track of the number of coins it has taken to get to the target value so far
    balance += numCoins
    // we then set the remainder value to keep track of how much we have left to acount for in the initial target value for example after finding out after adding three quarters together and getting 75 we then subtract 75 from 96 to get 21
    remainder = remainder - (arr[i] * numCoins)
   }
//    if the array passed through to the function has no more coin values to go through and the target value is greater then 0 it will return -1
   if (remainder > 0){
       return -1
   }
//    this will return the number of coins used to get to the target value
   return balance
}
const array3 = [25,10,1];  // []
console.log(coinChecker(array3, 96));