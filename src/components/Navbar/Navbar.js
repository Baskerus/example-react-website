import React, { useState } from "react";
import "./Navbar.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "./images/puzzle-part.png";

import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick(e) {
    let arr = document.querySelectorAll(".active-link");
    arr.forEach((element) => {
      element.classList.remove("active-link");
    });
    e.target.className = "nav-link active-link";
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="error"></img>
        EXAMPLE
      </div>
      <ul className="nav-links">
        <li className="nav-link active-link" onClick={handleLinkClick}>
          Home
        </li>
        <li className="nav-link" onClick={handleLinkClick}>
          Services
        </li>
        <li className="nav-link" onClick={handleLinkClick}>
          Gallery
        </li>
        <li className="nav-link" onClick={handleLinkClick}>
          Contact
        </li>
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
