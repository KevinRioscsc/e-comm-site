import React, { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./CartPreview";
import Template from "./SignInTemplate";

const NavBarAnimations = ({ dark }) => {
  const [toggleCart, setToggle] = useState(false);
  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  return (
    <>
      <NavBar
        toggleSignIn={() => setToggleSignIn(true)}
        toggle={() => setToggle(true)}
        dark={dark}
      />
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

export default NavBarAnimations;
