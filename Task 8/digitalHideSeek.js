function hide(stringHidingSpot) {
  const hideLocation = stringHidingSpot;

  function seek() {
    return hideLocation;
  }
  return seek();
}

// Calling the function outside of the function - i made the silly mistake of moving this line inside the function and was getting errors saying "Maximum call stack size exceeded". I had created an infinte loop where the hide function was getting called by the hide function over and over
const startGame = hide("In the kitchen behind the curtain");
console.log(startGame);

// I was getting errors saying that hideLocation is not defined, this is because this variable can only be accessed from inside the function "hide", where it was declared. This is known as function scope and and variables declared inside a function cannot be accessed or used from outside the function
// console.log(hideLocation);