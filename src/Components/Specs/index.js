import React, { useRef, useEffect } from "react";
import img1 from "../../Images/cable.svg";
import img2 from "../../Images/wind.svg";
import img3 from "../../Images/angle.svg";
import img4 from "../../Images/leaf.svg";
import { SpecSection, Spec, SpecIcon, SpecText } from "./SpecsStyled";

const Specs = () => {
  return (
    <div>
      <SpecSection>
        <Spec>
          <SpecIcon>
            <img src={img1} alt="" />
          </SpecIcon>
          <SpecText>Designed with opennings for passing cables.</SpecText>
        </Spec>
        <Spec>
          <SpecIcon>
            <img src={img2} alt="" />
          </SpecIcon>
          <SpecText>
            Prevents computer and instruments from over heating.
          </SpecText>
        </Spec>
        <Spec>
          <SpecIcon>
            <img src={img3} alt="" />
          </SpecIcon>
          <SpecText>Best ergonomic position.</SpecText>
        </Spec>
        <Spec>
          <SpecIcon>
            <img src={img4} alt="" />
          </SpecIcon>
          <SpecText>Very light, perfect for travelling.</SpecText>
        </Spec>
      </SpecSection>
    </div>
  );
};

export default Specs;
