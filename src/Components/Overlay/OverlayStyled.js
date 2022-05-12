import styled from "styled-components";

export const OverlayDiv = styled.div`
  opacity: ${(props) => (props.toggle ? "0.8" : "0")};
  visibility: ${(props) => (props.toggle ? "visibile" : "hidden")};
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  flex: 1 0 auto;
  z-index: 7;

  -webkit-transform: none;
  transform: none;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
`;
