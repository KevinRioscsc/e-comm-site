import React from "react";
import smallArrow from "../../../Images/smallArrow.svg";
import { OtherModels, Text, TextSpan } from "./OtherStyled";

const OtherProduct = () => {
  return (
    <>
      <OtherModels>
        <Text>
          <TextSpan>Other products</TextSpan>
          <img src={smallArrow} />
        </Text>
      </OtherModels>
    </>
  );
};

export default OtherProduct;
