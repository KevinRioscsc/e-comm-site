import React, { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";
import heroImg from "../../Images/hero02.png";
import {
  HeroDiv,
  BackgroundTop,
  BackgroundBottom,
  ScrollDown,
  Claim,
  HeroSection,
  ClaimContainer,
  HeroTag,
  HeroTitle,
  Button,
  BtnSpan,
} from "./HeroStyled";
import "./Bounce.css";
import { BsChevronDown } from "react-icons/bs";
import stand from "../../Images/stand.svg";
import { FaRegEye } from "react-icons/fa";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const prev = useRef(0);

  function doSomething(e) {
    let currentPosition = window.scrollY;
    let bottomView = window.scrollY + 900;

    if (currentPosition >= 0 && bottomView <= 1523) {
      if (currentPosition > prev.current) {
        setOpacity((prev) => (prev - 0.1).toFixed(1));
        prev.current = currentPosition;
      } else {
        setOpacity((prev) => (parseFloat(prev) + 0.1).toFixed(1));
        prev.current = currentPosition;
      }
    }
    if (currentPosition === 0) {
      setOpacity(1);
    }
    if (bottomView >= 1723) {
      setOpacity(0);
    }
  }

  const throttleFunc = throttle(doSomething, 200, { leading: true });
  useEffect(() => {
    window.addEventListener("scroll", throttleFunc, false);

    return () => window.removeEventListener("scroll", throttleFunc);
  }, []);
  return (
    <>
      <HeroSection>
        <HeroDiv img={heroImg}>
          <ScrollDown to="claim" smooth={true} duration={500}>
            <BsChevronDown className="bounce" color="white" size={59} />
          </ScrollDown>
        </HeroDiv>
        <Claim id="claim">
          <ClaimContainer>
            <img src={stand} alt="stand" />
            <HeroTitle>
              Hand-made wooden stands <br /> for laptops & instruments.
            </HeroTitle>
            <HeroTag>
              Designed by musicians. <br /> Built to last.
            </HeroTag>
            <Button to="products" smooth={true} duration={500}>
              <BtnSpan>View our products</BtnSpan>
              <FaRegEye style={{ verticalAlign: "middle " }} />
            </Button>
          </ClaimContainer>
        </Claim>
        <BackgroundTop opacity={opacity}></BackgroundTop>
        <BackgroundBottom></BackgroundBottom>
      </HeroSection>
    </>
  );
};

export default Hero;
