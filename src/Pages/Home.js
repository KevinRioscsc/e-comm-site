import React, { useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Feature from "../Components/Feature";
import { obj1, obj2, obj3 } from "../Components/Feature/Data";
import Specs from "../Components/Specs";
import Material from "../Components/Material";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import Cart from "../Components/CartPreview";
import Template from "../Components/SignInTemplate";

const Home = () => {
  const [toggleCart, setToggle] = useState(false);
  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  return (
    <>
      <NavBar
        toggleSignIn={() => setToggleSignIn(true)}
        toggle={() => setToggle(true)}
      />
      <Hero />
      <Feature {...obj1} />
      <Feature {...obj2} />
      <Feature {...obj3} />
      <Specs />
      <Material />
      <Products />
      <Footer />
      <Cart toggle={toggleCart} setToggle={() => setToggle(false)} />
      <Template
        toggle={toggleSignIn}
        toggleSwitch={() => setRegistered(true)}
        toggleVisbility={() => setToggleSignIn(false)}
        title={"Sign in"}
        inputs={["Email", "Password"]}
        btnTitle={"Sign in"}
        isRegistered={true}
      />

      <Template
        toggle={isRegistered}
        toggleSwitch={() => setToggleSignIn(true)}
        toggleVisbility={() => setRegistered(false)}
        title={"Sign up"}
        inputs={["Name", "Last Name", "Email", "Password", "Repeat Password"]}
        btnTitle={"Sign up"}
        isRegistered={false}
      />
    </>
  );
};

export default Home;
