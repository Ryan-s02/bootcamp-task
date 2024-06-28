// Importing the express module
const express = require("express");

// Creating an Express application instance
const app = express();

// Reading an parsing the data from the from the person.JSON file 
const personJsonString = JSON.stringify(require("./person.json"));
const personObj = JSON.parse(personJsonString);

// Serving static files from the "public" directory
app.use(express.static("public"));

// Defining a route for the root URL the sends a welcome message 
app.get("/", function (req, res) {
    // Sending a welcome message including the name from person.json
  res.send(`Welcome ${personObj.name}`);
});

// Am I correct in saying that I don't need the below lines of code because i have used express.static on the 'public' directory
// app.get("/about.html", function (req, res) {
//   res.send("/about.html");
// });
// app.get("/contact_us.html", function (req, res) {
//   res.send("contact_us.html");
// });

// Start the server and listen on port 3000
app.listen(3000, function () {
    // Logging a message on the consol indicating the server is up and running
  console.log("listening on port 3000");
});

// Using a catch-all route to handle 404 errors for undefined routes in the URL
app.get("*", function (res, res, next) {
    // Creating an error object for a 404 not found 
  let err = new Error("Sorry! Can't find that resource. Please check your URL");
  // Pass the error to the next middleware
  err.statusCode = 404;
  next(err);
});
