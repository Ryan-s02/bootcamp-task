import { useState, useRef, useEffect } from "react";
import {
  FormControl,
  InputGroup,
  Button,
  Card,
  ListGroup,
  Container,
} from "react-bootstrap"; // importing styling components from bootstrap


// Functional component to allow users to input a name amd get a predicted nationality with a percentage
function NationalityGuesser() {
  const [name, setName] = useState(""); // State to manage the input name
  const inputRef = useRef(); // Used to auto focus later on in the component
  const [result, setResult] = useState(null); // State to manage the API response
  const [inputName, setInputName] = useState(""); // Store the name after submission

  // Set the input field as the focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to fetch the nationality data for the name inputted
  async function fetchData(inputName) { 
    let response = await fetch(`https://api.nationalize.io/?name=${inputName}`);
    let data = await response.json();
    setResult(data);
    setInputName(inputName);
  }

  // Handling the submission of the form (input feild) - this function is used when the submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(name);
    setName(""); // Clear the input field after submission
  };

    // Handling the submission of the form (input feild) - this function is used when the return button on the keyboard is pressed
  const returnToSubmit = (e) => {
    // conditional to check that the key pressed was the return key
    if (e.key === "Enter") {
      e.preventDefault();
      fetchData(name);
      setName(""); // Clear input field after submission
    }
  };

  return (
    <Container>
      <div className="text-center">
        <h1>Nationality Guesser</h1>
      </div>
      <InputGroup>
        <FormControl
          type="text"
          value={name}
          placeholder="Find out where your name comes from"
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={returnToSubmit}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </InputGroup>
      {result && result.country && (
        <Card>
          <Card.Body>
            <Card.Title>Displaying results for {inputName}</Card.Title>
            <ListGroup>
              {result.country.map((country, index) => (
                <ListGroup.Item key={index}>
                  Country: {country.country_id} 
                  Probability: {(country.probability * 100).toFixed(2)}% {/*2 decimal places*/}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default NationalityGuesser;
