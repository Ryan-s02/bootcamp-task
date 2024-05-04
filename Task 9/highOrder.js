//should take in the arguments:
// - An array of string with 10 words where at least 3 words have 6 letters
// - A callback function that returns a boolean based on whether or not the word has 6 letters (only 6 letters)

//Array of words with 3 6 letter words inside it
const wordsArray = [
  "Banana",
  "Elephant",
  "Rainbow",
  "Sunshine",
  "Computer",
  "Chocolate",
  "Coffee",
  "Bicycle",
  "Mountain",
  "Notebook",
  "Letter",
];

//Initialising an empty array
let sixLetterArray = [];

//Callback function that iterates over the words in the wordsArray to find the 6 letter words
function sixLetterCheck() {
  for (let word of wordsArray) {
    if (word.length === 6) {
      // If the condtitions of the if statement are true then the word will get pushed to the sixLetterArray
      sixLetterArray.push(word);
    }
  }
  //returns the new updated version of the sixLetterArray with the 6 letter words pushed to it
  return sixLetterArray;
}

// Function that takes the in the arguments of the wordsArray and the callback function
function myFilterFunction(wordsArray, sixLetterCheck) {
  // Calling the callback function on the wordsArray
  return sixLetterCheck(wordsArray);
}

// Logging the result of calling the filter function
console.log(myFilterFunction(wordsArray, sixLetterCheck));
