import './App.css';
import Card from './components/card.js';
import image1 from './image1.png';

function App() {
  //user object with properties describing the user data
  const user = {
    name: "Joe",
    surname: "Bloggs",
    date_of_birth: "10 June 1999",
    country: "England",
    telephone:"12345678910",
    company: "HyperionDev",
    profile_picture: "https://en.wikipedia.org/wiki/File:Basic_human_drawing.png",
    shopping_cart: [
      "Salami",
      "Pepperoni",
      "Potatoes",
      "Cheese"
    ]
  };
  //using object.entries to go through the user object and map the key/value pairs to listItems
  const listItems = Object.entries(user).map(([key, value], index) => {
    //checking through the mapped array to see find the shopping cart array
      if(key === "shopping_cart" || key === "profile_picture"){
        //returning null so it isn't stored in listItems 
        return null;  
      }else{
        return (
          //return everything else in the user object
          <li key={index}>{key}: {value}</li>
          );
      }
  });

  //it made sense to render the shopping cart as a separate card that user info
  //maps a new array of items in the shopping cart and returns them in JSX to display in the card as a list
    const shoppingCart = user.shopping_cart.map((item, index) => {
        return(
          <li key={index}>{item}</li>
        )
    }); 
    

    //display all elements in the listItems array
    return (
      <div className='App'>
        {/* card for user info */}
        <Card className="user-card">
          <img src={image1} alt="stick man"/>
          <h2 className='title'>User Info</h2>
          <p>{listItems}</p>
        </Card>
        {/* card for shopping cart */}
        <Card>
          <h2>Shopping Cart</h2>
          <p>{shoppingCart}</p>
        </Card>
      </div>
  );
}

export default App;

//this code renders and compiles fine but i am getting some error messages in the console that i think i need help deciphering