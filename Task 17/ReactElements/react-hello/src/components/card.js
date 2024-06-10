import React from "react";
import "./Card.css";

//creating a new component for the cards with a classname for styling
function Card(props){
    return <div className="card">{props.children}</div>
};

export default Card;