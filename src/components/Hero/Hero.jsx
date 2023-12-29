import React from "react";
import "./Hero.css";
import Container from "../UI/Container/Container";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <div className="hero-content-top">
            <span>100% Customer Satisfaction</span>
            <div className="line"></div>
          </div>
          <h1>Neighbors Landscaping</h1>
          <h2>
            <span>Transforming dreams into reality</span>, we blend precision
            and innovation to build exceptional structures that stand as
            testaments to <span>quality and craftsmanship.</span>
          </h2>
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
