import React from "react";
import { OverlayDiv } from "./OverlayStyled";

const Overlay = ({ toggle }) => {
  return (
    <>
      <OverlayDiv toggle={toggle}></OverlayDiv>
    </>
  );
};

export default Overlay;
