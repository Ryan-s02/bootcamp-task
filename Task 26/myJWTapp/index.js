const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;

// Allows us to parse the body of a request
app.use(bodyParser.json());

// User login
app.post("/login", (req, res) => {
  // Req.body is sent by the client
  const usr = req.body.username;
  const pwd = req.body.password;
  if (usr === "zama" && pwd === "abcdef") {
    // res.send(`Username: ${usr}\n Password: ${pwd}`);
    payload = {
      name: usr,
      admin: true,
    };
    // Creating the JWT token
    const token = jwt.sign(JSON.stringify(payload), "jwt-secret", {
      algorithm: "HS256",
    });
    res.send({ token: token });
  } else {
    res.status(403).send({ err: "Incorrect login!" });
  }
});

app.get("/resource", (req, res) => {
  // Extracting token
  const auth = req.headers["authorisation"];
  const token = auth.split(" ")[1];
  try {
    // Verifies the token using the specified secret key
    const decoded = jwt.verify(token, "jwt-secret");
    res.send({
      msg: `Hello, ${decoded.name}! Your JSON Web Token has been verified`,
    });
  } catch (err) {
    // Error handling
    // If it is a bad key or tampered token send this response
    res.status(401).send({ err: "Bad JWT!" });
  }
});

// Check the JWT amd display a message if the token holder is an admin
app.get("/admin_resource", (req, res) => {
  // Watch this spelling of auth
  const token = req.headers["authorisation"].split(" ")[1];
  try {
    const decoded = jwt.verify(token, "jwt-secret");
    // If the user is an admin, send a message with 'Success!'
    // To test this, change the payload in the POST request to contain 'admin': true
    if (decoded.admin) {
      res.send({ msg: "Success!" });
    } else {
      res.status(403).send(
        // If not an admin, send this response
        { msg: "Your JWT was verified but you dont have admin privileges." }
      );
    }
  } catch (e) {
    // Error handling
    res.sendStatus(401);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Now listening at http://localhost:${PORT}`);
});
