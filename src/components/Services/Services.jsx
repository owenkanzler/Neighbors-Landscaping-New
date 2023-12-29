import React from "react";
import "./Services.css";
import Container from "../UI/Container/Container";

import { GiPineTree } from "react-icons/gi";
import { GiBrickWall } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <div className="service-item">
          <GiPineTree />
          <h5>Landscaping & Property Maintenece</h5>
          <p>
            Full-service landscaping and property maintenance for pristine,
            sustainable outdoor spaces.
          </p>
        </div>
        <div className="service-item">
          <GiBrickWall />
          <h5>Hardscaping</h5>
          <p>
            Structural outdoor enhancements for durable and aesthetically
            pleasing landscapes.
          </p>
        </div>
        <div className="service-item">
          <FaHardHat />
          <h5>Excavation</h5>
          <p>
            Digging and earth removal for construction and landscaping purposes.
          </p>
        </div>
      </Container>
      <div className="banner">
        <h4>
          We're here to help you get started in the right direction with your
          project.
        </h4>
        <div className="btn-box">
          <Link className="button" to="/contact" aria-label="Get a Quote">
            Get A Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
