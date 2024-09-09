import React from "react";
import heroImage from "../assets/images/illustration-hero.svg";

function Hero() {
  return (
    <div className="order-summary__hero">
      <img src={heroImage} alt="Hero" className="order-summary__hero-image" />
    </div>
  );
}

export default Hero;
