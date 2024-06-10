import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./login.css"

// function for logging in
export default function Login() {
  const [name, setName] = useState(""); // useState for name with default of empty string so the input field is empty on default
  const [loggedIn, setLoggedIn] = useState(false); // useState for log in with default of false so the login shows on default

  // when button is clicked, this will run and steLoggedIn to tru
  const handleLogin = (e) => {
    e.preventDefault();
      setLoggedIn(true);
  };

  // logout function that sets name to blank and loggedIn state to false
  const handleLogout = (e) => {
    setLoggedIn(false);
    setName(""); // setting the state of name to an empty string to clear the input field
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {!loggedIn ? (
        <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '100%', maxWidth: '400px' }}>
            <Card.Body>

        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Hi there! Enter your name below</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </Form.Group>
          {name.trim() !== '' && (

          <Button variant="primary" type="submit"  className="w-100 mt-3">
            Login
          </Button>
          )
          }
        </Form>
              </Card.Body>
        </Card>
      ) : (
        <Container>
          <h1>Welcome, {name}</h1>
          <Button variant="primary" type="submit" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      )}
    </Container>
  );
}
