import React from "react";
import Hero from "./Hero";
import Title from "./Title";
import Subtitle from "./Subtitle";
import PlanBox from "./PlanBox";
import Buttons from "./Buttons";

function OrderSummary() {
  return (
    <div className="order-summary">
      <Hero />
      <div className="order-summary__text-content">
        <Title text="Order Summary" />
        <Subtitle text="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!" />
        <PlanBox />
        <Buttons />
      </div>
    </div>
  );
}

export default OrderSummary;

