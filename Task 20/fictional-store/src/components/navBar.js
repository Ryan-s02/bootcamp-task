import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../product-images/recordStoreLogo.png";
import TotalPrice from "./totalPrice";

// functional component to render the navigation bar that link to different pages
export default function NavigationBar({ totalPrice }) {
  return (
    <Navbar className="navbar-custom nav-main">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image src={logo} style={{ width: "4rem" }} />

          <Link to="/homepage" className="nav-title">
            Spin City Records
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/homepage" className="individual-nav-links">
            Home
          </Link>
          <Link to="/products" className="individual-nav-links">
            Products
          </Link>
          <Link to="/about" className="individual-nav-links">
            About us
          </Link>
        </div>
        <TotalPrice totalPrice={totalPrice} />{" "}
        {/* Rendering the total price on the right of the navBar*/}
      </Container>
    </Navbar>
  );
}
