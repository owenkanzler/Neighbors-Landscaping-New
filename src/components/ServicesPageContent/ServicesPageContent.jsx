import React from "react";
import Container from "../UI/Container/Container";
import "./ServicesPageContent.css";
import grass from "../../assets/grass.png";
import landscaping from "../../assets/project1.png";
import hardscaping from "../../assets/project3.png";
import excavation from "../../assets/excavation.png";

const ServicesPageContent = () => {
  return (
    <section className="services-content">
      <Container>
        <span>We mold the future of tomorrow</span>
        <div className="line"></div>
        <h3>
          <span>Excellence</span> in Landscaping, Hardscaping and Excavation
        </h3>
        <div className="services-content-grid">
          <div className="service-content-item">
            <div className="service-item-content">
              <h4>Landscaping & Property Maintenance</h4>
              <p>
                Our comprehensive Landscaping & Property Maintenance service
                encompasses the artistry of transforming outdoor spaces into
                havens of beauty and functionality. From meticulous landscaping
                designs to sustainable property care, we offer a holistic
                approach, ensuring pristine environments that stand the test of
                time.
              </p>
            </div>
            <div className="service-item-img">
              <img
                src={landscaping}
                alt="Landscaping & Property Maintenance Image"
                loading="lazy"
                height="400px"
                width="100%"
              />
            </div>
          </div>
          <div className="service-content-item">
            <div className="service-item-img">
              <img
                src={hardscaping}
                alt="Landscaping & Property Maintenance Image"
                loading="lazy"
                height="400px"
                width="100%"
              />
            </div>
            <div className="service-item-content">
              <h4>Hardscaping</h4>
              <p>
                Hardscaping is our expertise in creating structural outdoor
                enhancements, seamlessly blending form and function. From
                durable patios to eye-catching retaining walls, we craft
                landscapes with enduring aesthetic appeal and practicality.
              </p>
            </div>
          </div>
          <div className="service-content-item">
            <div className="service-item-content">
              <h4>Excavation</h4>
              <p>
                Excavation is our precision earthwork service, involving digging
                and removal for construction and landscaping purposes. We
                meticulously prepare sites, ensuring a solid foundation for
                seamless project development and transformations in outdoor
                spaces.
              </p>
            </div>
            <div className="service-item-img">
              <img
                src={excavation}
                alt="Landscaping & Property Maintenance Image"
                loading="lazy"
                height="400px"
                width="100%"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPageContent;
