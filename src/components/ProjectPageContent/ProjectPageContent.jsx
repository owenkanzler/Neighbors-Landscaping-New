import React from "react";
import Container from "../UI/Container/Container";
import "./ProjectPageContent.css";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project93 from "../../assets/project9-3.png";
import project91 from "../../assets/project9-1.png";

const ProjectPageContent = () => {
  const imageUrls = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project93,
    project91,
  ];

  return (
    <section className="project-page-content">
      <span>Projects</span>
      <div className="line"></div>
      <h3>
        Highlighting our diverse recent projects,{" "}
        <span>ranging from landscaping renovations to new designs.</span>
      </h3>
      <Container>
        {/* <div className="project-grid">
          <img
            src={project1}
            alt="Project one"
            loading="lazy"
            width="500px"
            height="500px"
          />
          <img
            src={project2}
            alt="Project two"
            loading="lazy"
            width="500px"
            height="500px"
          />
          <img
            src={project3}
            alt="Project three"
            loading="lazy"
            width="500px"
            height="500px"
          />
          <img
            src={project4}
            alt="Project four"
            loading="lazy"
            width="500px"
            height="500px"
          />
          <img
            src={project5}
            alt="Project five"
            loading="lazy"
            width="500px"
            height="500px"
          />
        </div> */}
        <div className="project-grid">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="gallery-image"
              loading="lazy"
              width="500px"
              height="500px"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectPageContent;
