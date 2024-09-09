import '../styles/Buttons.css';
import React from "react";
import Button from "./Button";

function Buttons() {
  return (
    <div className="order-summary__buttons">
      <Button text="Proceed to Payment" className="order-summary__proceed-btn" />
      <Button text="Cancel Order" className="order-summary__cancel-btn" />
    </div>
  );
}

export default Buttons;

