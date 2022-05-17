import styled from "styled-components";

export const Icon = styled.div`
  position: fixed;
  right: 0;
  width: 30px;
  height: 22px;
  margin-top: 27px;
  margin-right: 27px;
  float: right;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 99;
  @media screen and (min-width: 840px) {
    display: none;
  }
`;
export const Span = styled.span`
  background: ${(props) => (props.dark ? "#4b4b4b" : "#ffff")};
  transition: all 0.3s ease-in-out;
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0);

  &:nth-child(1) {
    top: ${(props) => (props.toggle ? "10px" : "0")};
    width: ${(props) => (props.toggle ? "0" : "100%")};
    left: ${(props) => (props.toggle ? "50%" : "0")};
  }
  &:nth-child(2) {
    top: 10px;
    transform: ${(props) => (props.toggle ? " rotate(45deg)" : "unset")};
  }
  &:nth-child(3) {
    top: 10px;
    transform: ${(props) => (props.toggle ? " rotate(-45deg)" : "unset")};
  }
  &:nth-child(4) {
    top: ${(props) => (props.toggle ? "10px" : "20px")};
    width: ${(props) => (props.toggle ? "0" : "100%")};
    left: ${(props) => (props.toggle ? "50%" : "0")};
  }
`;
