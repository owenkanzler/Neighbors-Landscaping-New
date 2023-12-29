import React from "react";
import "./Contact.css";
import Container from "../UI/Container/Container";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <h3>
          Contact us to get a <span>free quote</span>
        </h3>
        <p>
          Ready to transform your outdoor space? Contact us now for expert
          landscaping and personalized solutions.
        </p>
        <Link className="button" to="/contact" aria-label="Contact Us">
          Contact Us
        </Link>
      </Container>
    </section>
  );
};

export default Contact;
