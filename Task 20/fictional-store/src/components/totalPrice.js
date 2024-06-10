import React from "react";

// passing totalPrice as a prop to the functional component TotalPrice
export default function TotalPrice({ totalPrice }) {
  // Conditional rendering for the total price (cart total). When there is nothing in the cart, it will not show
  return totalPrice > 0 ? (
    <div
      style={{
        backgroundColor: "#cabeb3",
        borderColor: "white",
        border: "solid white 1px",
        padding: "0.75rem",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ margin: 0, color: "white", fontSize: "1rem" }}>
        Cart Total: £{totalPrice.toFixed(2)}{" "}
        {/* 2 decimal places for currency */}
      </h2>
    </div>
  ) : null; // nothing will show when total price is 0
}
