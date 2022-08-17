"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

 function assignGrade(score) {
  return score >= 90 ? 'A':
  score >= 80 ? 'B':
  score >= 70 ? 'C':
  score >= 60 ? 'D':
  'F';
}

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(65));
