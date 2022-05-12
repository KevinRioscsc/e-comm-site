import React from "react";
import { Icon, Span } from "./HamStyled";

const HamBurger = ({ dark, toggle }) => {
  return (
    <>
      <Icon>
        <Span toggle={toggle} dark={dark}></Span>
        <Span toggle={toggle} dark={dark}></Span>
        <Span toggle={toggle} dark={dark}></Span>
        <Span toggle={toggle} dark={dark}></Span>
      </Icon>
    </>
  );
};

export default HamBurger;
