// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: it will add indigo string to end of array
// b) Verify and explain: partially correct, indigo was added but what was logged in the console was the index

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: the length of the string
// b) Verify and explain: correct, the length of the string including the space

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: the value of the 4th index which is "o"
// b) Verify and explain: correct "o" was the outcome

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: the second string in the array will print
// b) Verify and explain: correct, "Ruby" printed

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: every string in the array will be made Uppercase
// b) Verify and explain: incorrect, "It's not a function"

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: it will kick an error
// b) Verify and explain: incorrect, number was the output, i thought it would be an error because its asking for the datatypes but they are all strings
