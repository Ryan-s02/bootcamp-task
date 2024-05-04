//function to call an API and return the URL of a cat GIF
async function randomCatGif(){
   try {//will try this block of code first
    //waits until it revieves the result of the API call
    const result= await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
    //log the URL of the cat GIF to the console
    console.log(result.url);
   } catch (error){ //if the first block does not execute successfully or an error is thrown, then this will execute
    console.log(error);// log the error to the console
   };
}

randomCatGif();// function call