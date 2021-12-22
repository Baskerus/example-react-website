import React from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

function Services() {
  return (
    <div className="services-container" id="services">
      <Link to="services" smooth={true}>
        <FaChevronDown className="chevron-down" color="white" size="35" />
      </Link>

      <div className="cards-container">
        <ServiceCard
          title="Service One"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a rutrum urna. Donec non nunc vel lorem congue consectetur eget ac nunc."
          image="image-one"
          id="service-one"
        />
        <ServiceCard
          active="active"
          title="Service Two"
          description="Consectetur adipiscing elit. Nulla a rutrum urna. Donec non nunc vel lorem congue consectetur eget ac nunc."
          image="image-two"
          id="service-two"
        />
        <ServiceCard
          title="Service Three"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper faucibus dictum. In hac habitasse platea dictumst. Aliquam pretium."
          image="image-three"
          id="service-three"
        />
      </div>
    </div>
  );
}

export default Services;
