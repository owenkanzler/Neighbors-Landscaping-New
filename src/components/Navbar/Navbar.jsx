import React, { useRef, useLayoutEffect, useState } from "react";
import "./Navbar.css";
import Container from "../UI/Container/Container";
import logo from "../../assets/logo-NB.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(navbarRef.current, {
        backgroundColor: "#222222",
        duration: 0.5,
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "545 center",
          end: "545, center",
          toggleActions: "play none reverse none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <Container>
        <img
          src={logo}
          alt="Neighbors Landscaping"
          loading="lazy"
          width="250px"
          height="75px"
        />
        <ul>
          <li>
            <Link to="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" aria-label="Services">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" aria-label="Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
          <div
            className={
              navOpen ? "hamburger-box hamburger-box-open" : "hamburger-box"
            }
          >
            <div className={navOpen ? "line-top spin" : "line-top"}></div>
            <div className={navOpen ? "line-bottom spin" : "line-bottom"}></div>
          </div>
        </div>
        <div
          className="navbar-overlay"
          style={{
            top: navOpen ? "0" : "-1000%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <div className="navbar-link-container">
            <Link onClick={() => setNavOpen(!navOpen)} to="/" aria-label="Home">
              HOME
            </Link>
            <Link
              onClick={() => setNavOpen(!navOpen)}
              to="/services"
              aria-label="Services"
            >
              SERVICES
            </Link>
            <Link
              onClick={() => setNavOpen(!navOpen)}
              to="/projects"
              aria-label="Projects"
            >
              PROJECTS
            </Link>
            <Link
              onClick={() => setNavOpen(!navOpen)}
              to="/contact"
              aria-label="Contact"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
