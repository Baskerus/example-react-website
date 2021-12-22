import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import HeroImage from "./images/undraw_website_setup_re_d4y9.svg";
import HeroBg from "./images/undraw_website_setup_re_d4y9.svg";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="hero" className="hero-container">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      ></div>
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
        <Button>
          <Link to="services" smooth={true}>
            Learn More
          </Link>
        </Button>
      </div>
      <img
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        className="hero-img"
        src={HeroImage}
      ></img>
    </div>
  );
}

export default Hero;
