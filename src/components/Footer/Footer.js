import React from "react";
import "./Footer.css";
import FooterLinks from "./FooterLinks";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <FooterLinks
        title={"About"}
        linkList={[
          "Example",
          "Subscribe to Example",
          "Contact Example",
          "Example Gallery",
          "Information",
        ]}
      />
      <FooterLinks
        title={"Contact"}
        linkList={[
          "Information",
          "Subscribe",
          "Contact Example",
          "Community Guidelines",
          "Pricing",
        ]}
      />
      <FooterLinks
        title={"Visit us"}
        linkList={[
          "Pricing",
          "Contact Example",
          "Subscribe to Example",
          "Example Gallery",
          "Example",
        ]}
      />

      <div className="media-links">
        <AiFillFacebook size="35" />
        <AiOutlineInstagram size="35" />
        <AiFillGoogleCircle size="35" />
      </div>
    </div>
  );
}

export default Footer;
