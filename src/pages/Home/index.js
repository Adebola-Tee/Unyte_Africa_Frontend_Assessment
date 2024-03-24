import React from "react";
import Product from "../Products";
import Contact from "../Contact";
import Testimonial from "../../components/sections/Testimonial"

const Home = () => {
  return (
    <div className="pt-16">
    <Product/>
    <Testimonial/>
      <Contact />
    </div>
  );
};

export default Home;
