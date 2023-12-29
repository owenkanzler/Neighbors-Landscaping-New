import React from "react";
import "./Description.css";
import Container from "../UI/Container/Container";

import { IoIosClock } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";

const Description = () => {
  return (
    <section className="description">
      <Container>
        <div className="description-head">
          <span>Our Company</span>
          <div className="line"></div>
        </div>
        <div className="description-top">
          <h3>
            <span>Committed to client satisfaction</span>, ecological balance,
            and positive community impact.
          </h3>
          <p>
            Neighbors Landscaping strives to transform outdoor spaces into
            havens of beauty and functionality. With a commitment to quality and
            community, we create sustainable landscapes that enhance everyday
            living for neighbors.
          </p>
        </div>
        <div className="description-bottom">
          <div className="description-item">
            <IoIosClock />
            <div className="description-item-text">
              <h5>Experience</h5>
              <p>
                We leverage years of expertise, mastering landscaping
                intricacies to deliver excellence in every project, ensuring
                skillful execution and client satisfaction.
              </p>
            </div>
          </div>
          <div className="description-item">
            <HiSparkles />
            <div className="description-item-text">
              <h5>Detail</h5>
              <p>
                We prioritize precision, ensuring each element contributes to
                the overall beauty and functionality of outdoor spaces.
              </p>
            </div>
          </div>
          <div className="description-item">
            <IoIosPeople />
            <div className="description-item-text">
              <h5>Customer Service</h5>
              <p>
                Centered on client needs, our commitment to exceptional service
                fosters satisfaction and loyalty. We prioritize communication,
                tailoring solutions for a personalized and enduring client
                relationship.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
