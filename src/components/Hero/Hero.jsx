import React from "react";
import "./Hero.css";
import Container from "../UI/Container/Container";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <h6>Neighbors Landscaping</h6>
          <h1>
            Transforming dreams into reality with precision and innovation
          </h1>
          <p>
            we blend precision and innovation to build exceptional structures
            that stand as testaments to quality and craftsmanship.
          </p>
          <div className="btn-box">
            <Link className="button" to="/contact" aria-label="Get A Quote">
              Get A Quote
            </Link>
            <Link className="button" to="/services" aria-label="Learn More">
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
