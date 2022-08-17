"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

 function pluralize(noun, number) {
  if (noun === 'sheep') {
    return number + ' ' + noun
  } else if (noun === 'goose'){
    return number === 1 ? number + ' ' + 'goose' : number + ' ' + 'geese'
  } else {
    return number === 1 ? number + ' ' + noun : number + ' ' + noun + 's' ;
  }
}

console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("cat", 1));
console.log("I have " + pluralize("cat", 2));
