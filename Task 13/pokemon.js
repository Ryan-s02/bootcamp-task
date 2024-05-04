//fetching squirtle from the API
fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
//Fetch will return an object called res by default

//Parse the response as a JSON object
.then((res) => res.json())

//Callback used to parse the data
.then((result)=>{
    //assgin and store the data in the items array 
    squirtle = result;
    //return the data in the console
    console.log(squirtle.name, squirtle.weight, squirtle.abilities);
}//end arrow function
),//end .then

//Error handling for if the fetch execution fails
(error) => {
    //return an error in the console
    console.log(error);
}