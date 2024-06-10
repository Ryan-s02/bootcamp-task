import React from "react";
import './header.css';

//the header banner for the very top of the webpage
function Header() {
  return (
    <div className="header">
      <header>
        <div className="banner">
          <p id="leftside-header"><strong>Learn more about our bootcamps.</strong></p>
          <div className="vl"></div>
          <p id="rightside-header"><strong>Join our next info session webinar!</strong></p>
          <button className="button"><strong>Register Now</strong></button>
        </div>
      </header>
    </div>
  );
}
export default Header;
