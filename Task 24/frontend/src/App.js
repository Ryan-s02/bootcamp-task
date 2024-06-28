import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({}); // State to store fetched data
  const [customMessage, setCustomMessage] = useState({}); // State to store fetched message

  useEffect (() => {
    fetchMessage(); // Fetch message each time the component loads
  }, []);

  const fetchMessage = async () => {
    try {
    // Sends a GET request to 'http://localhost:8000//api/message' (backend server)
    const response = await axios.get('/api/message');
    setCustomMessage(response.data);
    } catch (error){
      console.log('Error fetching message:', error);
    }
  }

  useEffect (() => {
    fetchData(); // Fetch data each time the component loads
  }, [])

// Function to fetch data from the serber
const fetchData = async () => {
  try {
    // Sends a GET request to 'http://localhost:8000//api/data' (backend server)
    const response = await axios.get('/api/data');
    setData(response.data); // Update state with fetched data
  } catch (error){
    console.log('Error fetching data:', error);
  }
}
return (
  <div className='App'>
    <header className='App-header'>
      {/* Display the message, or 'Loading...' if data is not yet fetched */}
      <h1>Original message: {data.message }</h1>
      <h1>Custom message: {customMessage.message}</h1>
    </header>
  </div>
)
}
export default App;
