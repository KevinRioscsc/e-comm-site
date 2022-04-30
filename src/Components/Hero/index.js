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
import { GiLaptop } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const lastKnownScrollPosition = useRef(0);

  function doSomething(e) {
    let currentPosition = window.scrollY;

    console.log("prev position", lastKnownScrollPosition.current);
    console.log("current", currentPosition);
    if (opacity > 0.0 && currentPosition > lastKnownScrollPosition.current) {
      setOpacity((prev) => (prev - 0.1).toFixed(1));
      lastKnownScrollPosition.current = currentPosition;
    } else if (lastKnownScrollPosition.current > currentPosition) {
      setOpacity((prev) => (parseFloat(prev) + 0.1).toFixed(1));
      lastKnownScrollPosition.current = currentPosition;
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
          <ScrollDown>
            <BsChevronDown className="bounce" color="white" size={59} />
          </ScrollDown>
        </HeroDiv>
        <Claim>
          <ClaimContainer>
            <GiLaptop size={142} />
            <HeroTitle>
              Hand-made wooden stands <br /> for laptops & instruments.
            </HeroTitle>
            <HeroTag>
              Designed by musicians. <br /> Built to last.
            </HeroTag>
            <Button href="#">
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
