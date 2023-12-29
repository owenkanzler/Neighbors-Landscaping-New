import React from "react";
import "./Projects.css";
import Container from "../UI/Container/Container";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project9-3.png";
import project5 from "../../assets/project9-1.png";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects">
      <Container>
        <span>Featured Projects</span>
        <div className="line"></div>
        <div className="project-content">
          <h3>View some of our projects below</h3>
          <p>
            Discover our pride in showcasing recent projects, featuring expertly
            crafted retaining walls, hardscape designs, and sustainable
            landscaping transformations. Witness excellence in landscaping and
            property maintenance.
          </p>
        </div>
      </Container>
      <div className="project-showcase">
        <img
          src={project1}
          alt="Project one"
          loading="lazy"
          width="20%"
          height="100%"
        />
        <img
          src={project2}
          alt="Project one"
          loading="lazy"
          width="20%"
          height="100%"
        />
        <img
          src={project3}
          alt="Project one"
          loading="lazy"
          width="20%"
          height="100%"
        />
        <img
          src={project4}
          alt="Project one"
          loading="lazy"
          width="20%"
          height="100%"
        />
        <img
          src={project5}
          alt="Project one"
          loading="lazy"
          width="20%"
          height="100%"
        />
      </div>
      <Link className="button" to="/projects" aria-label="View Projects">
        View Projects
      </Link>
    </section>
  );
};

export default Projects;
