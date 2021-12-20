import React, { useState } from "react";

import "./ServiceCard.css";
import Button from "../Button/Button";
import serviceImageOne from "./images/undraw_co-working_re_w93t.svg";
import serviceImageTwo from "./images/undraw_conversation_re_c26v.svg";
import serviceImageThree from "./images/undraw_programmer_re_owql.svg";

function ServiceCard({ title, image, description, id }) {
  function handleCardClick(e) {
    let arr = document.querySelectorAll(".active");
    arr.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.closest(".card").className = "card active";
  }

  return (
    <div
      id={id}
      onClick={handleCardClick}
      className={title == "Service Two" ? "card active" : "card"}
    >
      {image == "image-one" ? (
        <img src={serviceImageOne} className="ml-10"></img>
      ) : image == "image-two" ? (
        <img src={serviceImageTwo}></img>
      ) : (
        <img src={serviceImageThree}></img>
      )}
      <h2>{title}</h2>
      <p className="service-description">{description}</p>
      <Button>View</Button>
    </div>
  );
}

export default ServiceCard;
