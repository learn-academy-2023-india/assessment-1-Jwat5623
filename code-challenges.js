// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// Input: two strings to figure out which of the two sets is longer
// Output: the string that is the longer of the two

const longerString = (string1, string2) => {
    if(string1.length > string2.length){
    return string1
} else {
    return string2
}
}
console.log(longerString(fruit1, fruit2))
console.log(longerString(fruit3, fruit4))
// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// Input: combining two arrays
// Output: length of combined arrays

var comboArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(comboArrays.length)
// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// Input: turn string into an array, reverse then turn the array back into a string
// Output: reversed string

var newString = currentCohort.split('').reverse().join('')
console.log(newString)

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// Input: create a for loop that only outputs odd numbers
// Output: odd numbers

const onlyOddNumbers = (stockExchange) => {
    let arrayOfOddNumbers = []
    for(let index = 0; index < stockExchange.length; index++){
        if(stockExchange[index] % 2 !== 0){
            arrayOfOddNumbers.push(stockExchange[index])
        }
    }
    return arrayOfOddNumbers
}
console.log(onlyOddNumbers([13, 34, -4, 42, 5, -5, 10, 27, 42, 10]))