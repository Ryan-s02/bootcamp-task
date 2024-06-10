import { useState, useEffect, useRef } from "react";
import {Container, Form, InputGroup, Button, Card, ListGroup} from "react-bootstrap"

// Display component allows users to input a location and get the current weather results for that place 
function DisplayWeather() {
  const [weather, setWeather] = useState(null); // State to manage the weather dat - initialised as null
  const inputRef = useRef(); // Used with useEffect to focus the input feild 
  const [place, setPlace] = useState("");// 

    // Set the focus of to the input feild
    useEffect(() => {
      inputRef.current.focus();
    }, []);

  // Api key for the weather API  
  const key = "29c3e493041b408da68104009240206"; // wasn't entirely sure where to store this

    // Fetch the data for the relevant place
    const fetchWeatherData = async (place) => {
        try {
            let response = await fetch(
                `https://api.weatherapi.com/v1/current.json?q=${place}&key=${key}`
                );
                
                let weatherRetrieved = await response.json();
                setWeather(weatherRetrieved);
            } catch(error){
                console.log("Couldn't fetch data right now: ", error)
            }
    

  }

  // Handling form submission for when the submit button is pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    // Conditional to check if the input feild has a value in it
    if(place.trim()===""){
        alert("Enter a location");
        return;
    }
    fetchWeatherData(place);
    setPlace("");// clear input field after submission
  };

  // Handling form submission for when the return key is pressed
  const returnToSubmit = (e) => {
    // conditional statement to check if the key pressed was the return key
    if (e.key === "Enter") {
      e.preventDefault();
      // Checking to see if the feild has a value in it
      if(place.trim()===""){
        alert("Enter a location");
        return;
    }
      fetchWeatherData(place);
      setPlace("");// clear input field after submission
    }
  };
  return (
    <Container>
        <h2 className="text-center mt-5 ">Choose a location to find the weather</h2>
    <InputGroup className="mt-5">
        <Form.Control
            type="text"
            ref={inputRef}
            onKeyDown={returnToSubmit}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Enter the city where you want to check the weather"/>
    <Button onClick={handleSubmit} variant="primary">Submit</Button>
    </InputGroup>
    <div>
      {weather ? (
        <Card className="mt-5">
            <Card.Body>
                <Card.Title>Showing weather in {weather.location.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Temperature: {weather.current.temp_c}</ListGroup.Item>
                    <ListGroup.Item>Condition: {weather.current.condition.text}</ListGroup.Item>
                    <ListGroup.Item>Wind: {weather.current.wind_mph} mph</ListGroup.Item>
                    <ListGroup.Item>Pressure: {weather.current.pressure_mb} mb</ListGroup.Item>
                    <ListGroup.Item>Humidity: {weather.current.humidity}%</ListGroup.Item>
                    <ListGroup.Item>Cloud: {weather.current.cloud}%</ListGroup.Item>
                    <ListGroup.Item>Feels like: {weather.current.feelslike_c}°C</ListGroup.Item>
                    <ListGroup.Item>Visibility: {weather.current.vis_km} km</ListGroup.Item>
                    <ListGroup.Item>UV Index: {weather.current.uv}</ListGroup.Item>
                    <ListGroup.Item>Gusts: {weather.current.gust_mph} mph</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
          ) : (
              <p>Loading...</p>
              )}
    </div>
              </Container>
  );
}
export default DisplayWeather;
