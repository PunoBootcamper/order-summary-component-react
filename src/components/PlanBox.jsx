import React from "react";
import iconMusic from "../assets/images/icon-music.svg";

function PlanBox() {
  return (
    <div className="order-summary__plan-box">
      <div className="order-summary__plan-box-left">
        <img src={iconMusic} alt="Music Icon" className="order-summary__plan-box-icon" />
        <div>
          <h5 className="order-summary__plan-title">Annual Plan</h5>
          <p className="order-summary__plan-price">$59.99/year</p>
        </div>
      </div>
      <a href="#" className="order-summary__plan-change">Change</a>
    </div>
  );
}

export default PlanBox;
