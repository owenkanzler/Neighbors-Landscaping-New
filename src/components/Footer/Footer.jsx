import React from "react";
import "./Footer.css";
import Container from "../UI/Container/Container";
import logo from "../../assets/logo-NB.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-col">
          <div className="footer-col-top">
            <img
              className="logo"
              src={logo}
              alt="Neighbors Landscaping"
              loading="lazy"
              width="250px"
              height="75px"
            />
          </div>
          <div className="footer-col-bottom">
            <p>
              In two years, we've excelled in crafting captivating landscapes,
              driven by creativity and client satisfaction. Our dedicated team
              reshapes outdoor spaces with transformative projects.
            </p>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-top">
            <h6>Useful Links</h6>
          </div>
          <div className="footer-col-bottom useful-links">
            <div className="link-box">
              <Link to="/" aria-label="Home">
                Home
              </Link>
              <Link to="/services" aria-label="Services">
                Services
              </Link>
            </div>
            <div className="link-box">
              <Link to="/projects" aria-label="Projects">
                Projects
              </Link>
              <Link to="/contact" aria-label="Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-top">
            <h6>Contact</h6>
          </div>
          <div className="footer-col-bottom contact-links">
            <span>
              <FaLocationDot /> Dayton, MN
            </span>
            <a
              href="mailto:neighbors.comp@gmail.com"
              aria-label="neighbors.comp@gmail.com"
            >
              <MdEmail /> neighbors.comp@gmail.com
            </a>
            <a href="/" aria-label="Facebook">
              <FaFacebookSquare /> Facebook
            </a>
          </div>
        </div>
      </Container>
      <Container className="lower-footer">
        © Neighbors Landscaping. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
