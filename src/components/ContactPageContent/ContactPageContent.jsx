import React from "react";
import Container from "../UI/Container/Container";
import "./ContactPageContent.css";

import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm/ContactForm";

const ContactPageContent = () => {
  return (
    <section className="contact-content">
      <Container>
        <div className="contact-content-grid">
          <div className="contact-grid-left">
            <h3>Get In Touch</h3>
            <p>
              Get in touch with us to bring your outdoor vision to life. Whether
              it's crafting captivating landscapes, hardscape designs, or
              ensuring meticulous property maintenance, we're here to create
              your ideal outdoor environment.
            </p>
            <div>
              <span>
                <FaLocationDot /> Dayton, MN
              </span>
              <a
                href="mailto:neighbors.comp@gmail.com"
                aria-label="neighbors.comp@gmail.com"
              >
                <MdEmail /> neighbors.comp@gmail.com
              </a>
              <a
                href="https://www.facebook.com/neighbors.companies"
                aria-label="Facebook"
              >
                <FaFacebookSquare /> Facebook
              </a>
              <span>
                <FaPhone /> 763-438-7187
              </span>
            </div>
          </div>
          <div className="contact-grid-right">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPageContent;
