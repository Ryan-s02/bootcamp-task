
//Variables taken from the user
const mothersName = prompt("What is your mother's first name?");

const streetName = prompt("What was the name of the street name you grew up on?");

const favouriteColour = prompt("As a child, what was your favourite colour?");

const age = Number(prompt("Please enter your current age?"));

const randomNumber = Number(prompt("Pick any random number 1-10"));

// console.log(motherName, streetName, favouriteColour, age, randomNumber)


//Variables made from user's input to put into template literal
const bestFriend = mothersName + ' ' +streetName;

const yearsToGetMarried = age + randomNumber;

const yearsToColourHair = Math.round(age / randomNumber);

const numberOfChildren = age % randomNumber;


console.log(`In ${randomNumber} years you are going to meet your best friend named ${bestFriend}.

You will get married in ${yearsToGetMarried} years and have ${numberOfChildren} children.

In ${yearsToColourHair} years you are going to dye your hair ${favouriteColour}.`)