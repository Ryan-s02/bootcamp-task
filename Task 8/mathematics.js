function findSum(integers) {
  let sumOfIntegers = 0;
  for (let i = 0; i < integers.length; i++) {
    sumOfIntegers += integers[i];
  }

  return sumOfIntegers;
}

function subtractNumbers(integers) {
  //subtracting the second number from the first number
  return integers[0] - integers[1];
}

function multiplyNumbers(x, y) {
  return x * y;
}

function divideNumbers(x, y) {
  if (y === 0) {
    //handling cases where the second number is 0
    return "You cannot divide a number by 0, please try another number";
  } else {
    return x / y;
  }
}

//defining an array with 3 numbers
const integers = [10, 5, 8];

let sumOfArray = findSum(integers); //to be used in calling the divideNumbers function

console.log(findSum(integers)); //calling the findSum function with the array of 3 integers
console.log(subtractNumbers(integers)); // Using the first and second number in integers to call subtractNumbers
console.log(multiplyNumbers(integers[2], integers[0])); //Using the third and first number in the array to
console.log(divideNumbers(sumOfArray, integers[2])); //Using the sumOfArray variable and the 3rd number in the array to call divideNumbers function
