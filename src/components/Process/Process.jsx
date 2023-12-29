import React from "react";
import "./Process.css";
import Container from "../UI/Container/Container";

import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdCheck } from "react-icons/md";

const Process = () => {
  return (
    <section className="process">
      <Container>
        <div className="process-head">
          <span>Our Process</span>
          <div className="line"></div>
        </div>
        <div className="process-content">
          <div className="process-text">
            <h3>
              Building design and process — <span>step by step</span>
            </h3>
            <p>
              Neighbors Landscaping begins with a thorough consultation,
              understanding your vision. We meticulously plan, integrating
              design and functionality. Expert execution follows, with attention
              to detail in crafting retaining walls, hardscape designs, and
              property maintenance, ensuring satisfaction with every outdoor
              transformation.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <FaConnectdevelop />
              <h6>
                <span>01</span> Inquiry & Consultation
              </h6>
              <p>
                During the initial step, we engage in a detailed consultation to
                understand your vision, needs, and preferences, laying the
                foundation for a personalized and tailored landscaping solution.
              </p>
            </div>
            <div className="process-step">
              <MdOutlineDesignServices />
              <h6>
                <span>02</span> Design & Price
              </h6>
              <p>
                In the design and pricing phase, we intricately craft a tailored
                plan aligning with your vision, ensuring aesthetic appeal,
                functionality, and transparency in cost estimates for a
                comprehensive landscaping solution.
              </p>
            </div>
            <div className="process-step">
              <MdCheck />
              <h6>
                <span>03</span> Complete Your Project
              </h6>
              <p>
                In the this phase, we bring your vision to life with precision
                and expertise, ensuring the seamless execution of your
                landscaping project from start to finish.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
