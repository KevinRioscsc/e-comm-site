import React from "react";
import Hero from "../Components/Hero";
import Feature from "../Components/Feature";
import { obj1, obj2, obj3 } from "../Components/Feature/Data";
import Specs from "../Components/Specs";
import Material from "../Components/Material";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import NavBarAnimations from "../Components/NavBarAnimations";

const Home = () => {
  return (
    <>
      <NavBarAnimations />
      <Hero />
      <Feature {...obj1} id={"feature"} />
      <Feature {...obj2} />
      <Feature {...obj3} />
      <Specs />
      <Material />
      <Products id={"products"} />
      <Footer />
    </>
  );
};

export default Home;
