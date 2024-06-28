const express = require('express');
const cors = require('cors');

const app = express();

// defining the port number for the backend server
const PORT = process.env.PORT || 8000;

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Defining the route to retrieve the message
app.get('/api/data', (req, res) => {
    const data = { messageFromBackend: 'Hello from the backend!'};
    res.json(data); // Send data as the response
});

// Adding a new custom message 
app.get('/api/message', (req, res) => {
    const data = {newMessageFromBackend: `Hello from the other side, I must've called a thousand times`};
    res.json(data)
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});