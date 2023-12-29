import React from "react";
import Contact from "../components/Contact/Contact";
import Description from "../components/Description/Description";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Process from "../components/Process/Process";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Description />
      <Projects />
      <Process />
      <Contact />
    </>
  );
};

export default Home;
