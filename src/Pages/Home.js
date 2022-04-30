import React from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Feature from "../Components/Feature";
import { obj1, obj2, obj3 } from "../Components/Feature/Data";
import Specs from "../Components/Specs";
import Material from "../Components/Material";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature {...obj1} />
      <Feature {...obj2} />
      <Feature {...obj3} />
      <Specs />
      <Material />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
