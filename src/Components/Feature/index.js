import React, { useRef, useEffect, useState } from "react";

import {
  FeatureDiv,
  FeatureImg,
  Img,
  FeatureText,
  FeatureBox,
  FeatureTitle,
  FeatureDescr,
} from "./FeatureStyled";

const Feature = ({ background, img, side, title, description, width }) => {
  const [transform, setTransform] = useState(80);
  const inputRef = useRef();
  const prev = useRef(0);
  const scrollHandler = () => {
    let top = inputRef.current.getBoundingClientRect().top + window.scrollY;
    let bottomView = window.scrollY + 900;
    let current = window.scrollY;

    if (bottomView >= top && bottomView <= top + 500) {
      if (current > prev.current) {
        setTransform((prev) => prev - 1.4);
        prev.current = current;
      } else {
        setTransform((prev) => prev + 1.4);
        prev.current = current;
      }
    }
    if (bottomView <= top) {
      setTransform(80);
    }
    if (bottomView >= top + 500) {
      setTransform(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  return (
    <>
      <FeatureDiv color={background} side={side}>
        <FeatureImg
          ref={inputRef}
          style={{ transform: `translate3d(0px, ${transform}px, 0px)` }}
        >
          <Img src={img} alt="img" width={width} />
        </FeatureImg>
        <FeatureText>
          <FeatureBox>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescr>{description}</FeatureDescr>
          </FeatureBox>
        </FeatureText>
      </FeatureDiv>
    </>
  );
};

export default Feature;
