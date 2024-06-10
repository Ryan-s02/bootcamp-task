import React from "react";
import Figure from "react-bootstrap/Figure";
import logo from "../product-images/recordStoreLogo.png";
import { Container, Col, Row } from "react-bootstrap";
import shopfront from "../product-images/spin-city-shopfront.jpg";
import "./about.css";
import instore from "../product-images/inside-spin-city.jpg";

export default function About() {
  return (
    <div>
      <h1 className="mt-4">A little bit about us</h1>


{/* Using containers with figures inside to display information about the store and photos/images with vairious styling methods */}

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Figure>
              <Figure.Image
                src={logo}
                style={{ width: "100%", maxWidth: "400px" }}
                className="figure-img img-fluid rounded logo-image"
              />
              <Figure.Caption className="mt-2 text-center logo-caption">
                Spin City Logo
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>

      <Container>
        <Figure>
          <Figure.Caption className="mt-5 text-center">
            <h2>Our Story</h2>
            We first opened our doors in 2018 on the vibrant streets of Belfast
            City Centre. Here at Spin City we pride ourselves on not only our
            music taste but also the amazing quality and selection of records!
          </Figure.Caption>
        </Figure>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Figure>
              <Figure.Image
                className="figure-img img-fluid rounded"
                src={shopfront}
                style={{ width: "100%", maxWidth: "300px" }}
              />
              <Figure.Caption className="mt-2 text-center">
                Spin City Shopfront
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                src={instore}
                style={{ width: "95%", maxWidth: "300px" }}
                className="figure-img img-fluid rounded"
              />
              <Figure.Caption className="mt-2 text-center">
                Inside Spin City
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>

      <Container >
        <Figure>
          <Figure.Caption className="mt-5 text-center">
            <h2>Contact Us</h2>
            <p>Email: spincity@vinylstore.com</p> <p>Phone:028 123 456</p>
          </Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
}