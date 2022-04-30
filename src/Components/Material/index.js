import React from "react";
import { MaterialSection, Heading } from "./MaterialStyled";
import mat from "../../Images/material.jpg";

const Material = () => {
  return (
    <div>
      <MaterialSection img={mat}>
        <Heading>
          Multi-laminated, 12.5 mm,
          <br />
          routed guatambu wood.
        </Heading>
      </MaterialSection>
    </div>
  );
};

export default Material;
