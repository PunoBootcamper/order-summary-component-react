import '../styles/PlanBox.css';
import React from "react";
import PlanDetails from "./PlanDetails";
import ChangeLink from "./ChangeLink";

function PlanBox() {
  return (
    <div className="order-summary__plan-box">
      <PlanDetails />
      <ChangeLink />
    </div>
  );
}

export default PlanBox;

