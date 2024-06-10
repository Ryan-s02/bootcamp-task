import React from "react";
import './hamburger.css'

//creating the visual hamburger before i knew that bootstrap could be used, something to look into in the future
function Hamburger() {
  return (
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
  );
}

export default Hamburger;
