import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import Service from "../../components/sections/Service";
import Testimonial from "../../components/sections/Testimonial"

const Home = () => {
  return (
    <div className="pt-16">
    <Project />
    <Testimonial/>
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
