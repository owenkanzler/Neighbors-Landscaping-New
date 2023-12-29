import React from "react";
import Container from "../UI/Container/Container";
import "./About.css";
import aboutImg from "../../assets/about-img.png";

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <div>
              <span>Welcome to Neighbors Landscaping</span>
              <div className="line"></div>
              <h2>
                We value innovation and professionalism,{" "}
                <span>
                  emphasizing cutting-edge solutions with high standards.
                </span>
              </h2>
            </div>
            <div className="about-about">
              <p>
                Servicing Hennipen and surrounding counties, in just two years
                our landscaping excels in crafting captivating retaining walls
                and hardscape designs, fueled by creativity and quality
                commitment, delighting clients with stunning transformations.
              </p>
              <p>
                Our journey, marked by growth and innovation, thrives on a
                dedicated team. From intricate hardscape projects to sustainable
                rock mulch designs, we're passionate about enhancing outdoor
                spaces. Our commitment to excellence propels us forward, leaving
                lasting impressions in the landscaping industry.
              </p>
              <p>
                At our core is an unwavering dedication to client satisfaction.
                Focused on excellence, we navigate continual growth with
                transformative projects. From intricate hardscapes to
                sustainable rock mulch, we're driven to reshape outdoor
                environments.
              </p>
            </div>
          </div>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="Action shots of workers working."
              loading="lazy"
              width="624px"
              height="auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
