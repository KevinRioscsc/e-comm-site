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
  const scrollHandler = (_) => {
    console.log(`${title} tops:`, inputRef.current.getBoundingClientRect().top);

    if (
      window.scrollY >= inputRef.current.getBoundingClientRect().top &&
      window.scrollY <=
        parseInt(inputRef.current.getBoundingClientRect().top + 1000)
    ) {
      setTransform((prev) => prev - 1.4);
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
          data-0-center-center="transform:translate3d(0, 0, 0);"
          data-600-center-center="transform:translate3d(0, 80px, 0);"
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
