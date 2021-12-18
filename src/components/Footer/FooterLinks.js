import React from "react";
import "./Footer.css";

function FooterLinks({ linkList, title }) {
  return (
    <div className="footer-links-wrapper">
      <h5 className="footer-links-title">{title}</h5>
      <ul className="footer-links">
        {linkList.map((link, index) => {
          return <li>{linkList[index]}</li>;
        })}
      </ul>
    </div>
  );
}

export default FooterLinks;
