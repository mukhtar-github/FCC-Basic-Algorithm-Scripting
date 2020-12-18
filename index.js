// *** Basic Algorithm Scripting: 
// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
//   let maxLength = 0;
//   let words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6;

// Code Explanation
// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.




// *** Return Largest Numbers in Arrays.
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// (Procedural approach)
// function largestOfFour(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largeNum = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largeNum) {
//         largeNum = arr[i][j];
//       }
//       newArr[i] = largeNum;
//     }
//   }
//   return newArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ].

// Code Explanation
// Create a variable to store the results as an array.
// Create an outer loop to iterate through the outer array.
// Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
// Create said inner loop to work with the sub-arrays.
// Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
// After the inner loop, save the largest number in the corresponding position inside of the results array.
// And finally return said array.


// (Declarative approach)
// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

// Code Explanation
// we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
// within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
// the callback function passed to the reduce method takes the previous value and the current value and compares the two values
// if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item.




// *** Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// function confirmEnding(str, target) {
  
//   return str.slice(str.length - target.length) === target;
  
// }

// console.log(confirmEnding("Bastian", "n")); //true.

// Code Explanation
// First we use the slice method to copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.
// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(10, 17) would return give me.
// In this case we only include one parameter which it will copy everything from the starting index.
// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
// Finally we compare the return result of slice to target and check if they have the same characters.




// *** Repeat a String Repeat a String.
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//   let accStr = "";
//   for (let i = num.length - 1; num > 0; num--) {
//     accStr += str;
//   }
//   return accStr;
// }

// console.log(repeatStringNumTimes("abc", 3)); //abcabcabc.

// Code Explanation
// Create an empty string variable to store the repeated word.
// Use a while loop or for loop to repeat code as many times as needed according to num
// Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
// At the end of the loop, return the variable for the repeated word.




// *** Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));//2

// Code Explanation
// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.




// *** Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// function booWho(bool) {
//   return typeof(bool) === "boolean";
// }

// console.log(booWho(false)); //true

// Code Explanation
// Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.




// *** Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// function titleCase(str) {
//   str = str.split(' ');

//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].toLowerCase().split('');
//     str[i][0] = str[i][0].toUpperCase();
//     str[i] = str[i].join('');
//   }

//   return str.join(' ');
// }

// console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot

// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function(val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }

// titleCase("I'm a little tea pot");

// Code Explanation
// We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.




// *** Slice and Splice
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.



// function frankenSplice(arr1, arr2, n) {

//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));//[ 4, 1, 2, 3, 5, 6 ].

// Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function.

// Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax .... localArr is returned and the function is complete.




// *** Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


// function bouncer(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]

// Code Explanation
// We create a new empty array.
// We use a for loop cycle to iterate over all elements of the provided array (arr).
// We use the if statement to check if the current element is truthy or falsy.
// If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
// We return the new array (newArray).


// function bouncer(arr) {
//   return arr.filter(Boolean);
// }

// Code Explanation
// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.




// *** Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Procedural
// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (var i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

// console.log(mutation(["hello", "hey"])); // false.


// Code Explanation
// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.

// If they are all found, the loop will finish without returning anything and we get to return true.


// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (var i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }
