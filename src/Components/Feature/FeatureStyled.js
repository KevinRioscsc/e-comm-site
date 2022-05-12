import styled from "styled-components";

export const FeatureDiv = styled.div`
  background-color: ${(props) => props.color};
  padding: 80px 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  letter-spacing: 0.17px;
  vertical-align: baseline;
  justify-content: center;
  align-content: center;
  flex-direction: ${(props) => (props.side ? "row" : "row-reverse")};
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 80px 30px;
  }
  @media screen and (max-width: 1200px) {
    padding: 80px 60px;
  }
  @media screen and (max-width: 640px) {
    padding: 40px 30px;
  }
  &::before {
    content: " ";
    display: table;
  }
  &::after {
    content: " ";
    display: table;
    clear: both;
  }
`;
export const FeatureImg = styled.div`
  flex-grow: 2;
  text-align: center;
  transition: transform 0.2s linear;
`;
export const Img = styled.img`
  max-width: 100%;

  max-height: ${(props) => (props.width ? "520px" : "440px")};
`;
export const FeatureText = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 0 30px;
  width: 30%;
  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 1000px) {
    width: unset;
  }
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;
export const FeatureBox = styled.div`
  color: #fdfdfd;
`;
export const FeatureTitle = styled.h2`
  margin-bottom: 33px;
  font-size: 40px;
  @media screen and (max-width: 640px) {
    font-size: 32px;
  }
`;
export const FeatureDescr = styled.p`
  margin-bottom: 26px;
  line-height: 30px;
  font-size: 20px;
`;
