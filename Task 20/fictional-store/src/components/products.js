import React from "react";
import { useState } from "react";
import brat from "../product-images/brat.png";
import danceFever from "../product-images/danceFever.jpg";
import fineLine from "../product-images/fineLine.png";
import harrysHouse from "../product-images/harrysHouse.png";
import hitMeHardAndSoft from "../product-images/hitMeHardAndSoft.png";
import imDoingItAgainBaby from "../product-images/imDoingItAgainBaby.png";
import pinkFriday2 from "../product-images/pinkFriday2.png";
import radicalOptimism from "../product-images/radicalOptimism.png";
import theFame from "../product-images/theFame.jpg";
import theShow from "../product-images/theShow.jpg";
import {
  Button,
  Container,
  Card,
  Image,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import "./products.css";

// Passing through setTotalPrice Products as a prop, so that the global state can me changed from here
export default function Products({ setTotalPrice }) {
  // array of objects
  const recordsForSale = [
    {
      title: "Hit Me Hard And Soft",
      artist: "Billie Eilish",
      genre: "Pop | Dance | Alternative",
      price: 33.99,
      image: hitMeHardAndSoft,
      colours: ["Black", "Red", "Yellow"],
    },
    {
      title: "Radical Optimism",
      artist: "Dua Lipa",
      genre: "Pop",
      price: 25.99,
      image: radicalOptimism,
      colours: ["Black", "Blue", "Green"],
    },
    {
      title: "Brat",
      artist: "Charli XCX",
      genre: "Hyperpop | Dance | Club",
      price: 29.99,
      image: brat,
      colours: ["Black", "Green", "Yellow"],
    },
    {
      title: "The Fame",
      artist: "Lady Gaga",
      genre: "Electronic | Synth-pop | Dance",
      price: 43.99,
      image: theFame,
      colours: ["Black", "Red", "Yellow"],
    },
    {
      title: "I'm Doing It Again Baby",
      artist: "girl in red",
      genre: "Alternative | Indie",
      price: 24.9,
      image: imDoingItAgainBaby,
      colours: ["Black", "Orange", "Blue"],
    },
    {
      title: "Fine Line",
      artist: "Harry Styles",
      genre: "Pop-Rock",
      price: 27.34,
      image: fineLine,
      colours: ["Black", "Pink", "Red"],
    },
    {
      title: "Pink Friday 2",
      artist: "Nicki Minaj",
      genre: "Rap | Pop | R&B",
      price: 31.65,
      image: pinkFriday2,
      colours: ["Black", "Pink", "Blue"],
    },
    {
      title: "The Show",
      artist: "Niall Horan",
      genre: "Pop/Rock",
      price: 27.84,
      image: theShow,
      colours: ["Black", "Red", "Blue"],
    },
    {
      title: "Harry's House",
      artist: "Harry Styles",
      genre: "Funk | Pop",
      price: 27.41,
      image: harrysHouse,
      colours: ["Black", "Beige", "Yellow"],
    },
    {
      title: "Dance Fever",
      artist: "Florence & The Machine ",
      genre: "Alternative | Indie | Pop/Rock",
      price: 33.99,
      image: danceFever,
      colours: ["Black", "Gold", "Pink"],
    },
  ];

  // useState for selectedColours
  const [selectedColours, setSelectedColours] = useState(
    recordsForSale.map(() => null)
  );

  // I was having issues when selecting a colour from the dropdown menu on each product card
  //

  // function that contains the logic of what to do when a colour is selected from the dropdown on a card
  const handleSelect = (colour, index) => {
    // prevState represents the current state of selctedColours
    setSelectedColours((prevState) => {
      const updatedColours = [...prevState]; // Create a shallow copy of the previous state array to avoid direct mutation
      updatedColours[index] = colour; // Set the selected colour at the specified index in the copied array
      return updatedColours; // Return the updated array as the new state
    });
  };

  // Function to handle when the addToCart button is pressed to reflect on the totalPrice
  const handleAddToCart = (record) => {
    setTotalPrice((prevPrice) => prevPrice + record.price); // prevPrice represents the current price, add on the selected records price
  };
  return (
    <div>
      <Container className="card-container">
        <Row className="d-flex justify-content-center">
          {/* Maps over the recordsForSale array to display each object uniformly */}
          {recordsForSale.map((record, index) => (
            <Col md={5} className="d-flex justify-content-centers" key={index}>
              <Card style={{ width: "25rem", margin: "2rem", display: "flex" }}>
                <Card.Body>
                  <Image src={record.image} variant="top" fluid />
                  <p className="card-price">£{record.price}</p>
                  <p className="card-artist">{record.artist}</p>
                  <p className="card-title">{record.title}</p>
                  <p className="card-genre">{record.genre}</p>
                  <Dropdown onSelect={(colour) => handleSelect(colour, index)}>
                    {/* Add toggle to change the colour of the dropdown to the selectd colour */}
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: selectedColours[index]
                          ? selectedColours[index].toLowerCase()
                          : "#007bff",
                      }}
                    >
                      {selectedColours[index] || "Colour"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {/* Mapping the array of colours for each record to put them into a dropdown */}
                      {record.colours.map((colour, idx) => (
                        <Dropdown.Item eventKey={colour} key={idx}>
                          {colour}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button onClick={() => handleAddToCart(record)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
