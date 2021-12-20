import React, { useState } from "react";
import "./Navbar.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "./images/puzzle-part.png";
import { Link } from "react-scroll";

import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLinkClick(e) {
    let arr = document.querySelectorAll(".active-link");
    arr.forEach((element) => {
      element.classList.remove("active-link");
    });
    e.target.className = "nav-link active-link";

    closeDropdown();
  }

  function handleDropLink(e) {
    setShowDropdown(!showDropdown);
    if (e.target.innerHTML == "Service One") {
      document.querySelector("#service-one").classList.add("active");
      document.querySelector("#service-two").classList.remove("active");
      document.querySelector("#service-three").classList.remove("active");
    } else if (e.target.innerHTML == "Service Two") {
      document.querySelector("#service-two").classList.add("active");
      document.querySelector("#service-one").classList.remove("active");
      document.querySelector("#service-three").classList.remove("active");
    } else if (e.target.innerHTML == "Service Three") {
      document.querySelector("#service-three").classList.add("active");
      document.querySelector("#service-two").classList.remove("active");
      document.querySelector("#service-one").classList.remove("active");
    }
  }
  function closeDropdown() {
    setShowDropdown(false);
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="error"></img>
        EXAMPLE
      </div>
      <ul className="nav-links">
        <Link
          to="hero"
          smooth={true}
          spy={true}
          className="nav-link active-link"
          onClick={handleLinkClick}
        >
          Home
        </Link>

        <li className="nav-link drop" onClick={handleDropLink}>
          <h3 className="service-title">Services</h3>

          {showDropdown ? (
            <Link to="services" spy={true} smooth={true}>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li className="dropdown-link" onClick={handleDropLink}>
                    Service One
                  </li>
                  <li className="dropdown-link" onClick={handleDropLink}>
                    Service Two
                  </li>
                  <li className="dropdown-link" onClick={handleDropLink}>
                    Service Three
                  </li>
                </ul>
              </div>
            </Link>
          ) : (
            ""
          )}
        </li>

        <li className="nav-link" onClick={handleLinkClick}>
          Gallery
        </li>
        <Link to="contact" smooth={true} spy={true}>
          {" "}
          <li className="nav-link" onClick={handleLinkClick}>
            Contact
          </li>
        </Link>
      </ul>

      {!menuOpen ? (
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={30} />
        </div>
      ) : (
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FiX size={30} />
        </div>
      )}

      <MobileMenu menuOpen={menuOpen} />
    </div>
  );
}

export default Navbar;
