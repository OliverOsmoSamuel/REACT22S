"use strict";
/**
Complete the function capitalize such that it capitalizes the name parameter it receives.
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints
if it's still not clear.

Tests:
returns a string
returns capitalized word

 * @param {string} word
 */
function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

function capitalize2(word) {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

console.log(capitalize2("sam")); // "Sam"
console.log(capitalize2("ALEX")); // "Alex"
console.log(capitalize2("chARLie")); // "Charlie"