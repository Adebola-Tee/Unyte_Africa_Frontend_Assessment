import React from "react";
import Product from "../Products";
import Contact from "../Contact";
import Review from "../../components/sections/Review"

const Home = () => {
  return (
    <div className="pt-16">
    <Product/>
    <Review/>
      <Contact />
    </div>
  );
};

export default Home;
