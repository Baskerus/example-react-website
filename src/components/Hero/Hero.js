import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import HeroImage from "./images/undraw_website_setup_re_d4y9.svg";

function Hero() {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-text-container">
        <h1>
          Welcome to
          <br />
          <b>EXAMPLE</b>.
        </h1>
        <p>
          <b>Lorem ipsum</b> is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts.
        </p>
        <Button>Learn More</Button>
      </div>
      <img className="hero-img" src={HeroImage}></img>
    </div>
  );
}

export default Hero;
