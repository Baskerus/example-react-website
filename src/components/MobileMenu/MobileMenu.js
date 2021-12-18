import React from "react";
import "./MobileMenu.css";

function MobileMenu({ menuOpen }) {
  return (
    <div className={`nav-menu ${menuOpen ? "" : "inactive"}`}>
      <ul className="menu-nav-links">
        <li className="menu-nav-link">Home</li>
        <li className="menu-nav-link">Services</li>
        <li className="menu-nav-link">Gallery</li>
        <li className="menu-nav-link">Contact</li>
      </ul>
    </div>
  );
}

export default MobileMenu;
