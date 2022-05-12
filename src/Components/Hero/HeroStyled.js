import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeroDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: relative;
`;

export const BackgroundTop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  opacity: ${(props) => props.opacity};
  top: 0;
  background-color: #a9d9ca;
  z-index: -1;
  will-change: opacity;
  -webkit-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
`;
export const BackgroundBottom = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  top: 0;
  background-color: #c3ada5;
  z-index: -2;
`;
export const ScrollDown = styled(LinkS)`
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
`;
export const Claim = styled.div`
  color: #fdfdfd;
  padding: 110px 0 60px;
`;
export const HeroSection = styled.section`
  position: relative;
`;
export const ClaimContainer = styled.div`
  padding: 0 30px;
  text-align: center;
`;
export const HeroTag = styled.p`
  margin-bottom: 50px;
  font-size: 20px;
`;
export const HeroTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 52px;
  vertical-align: baseline;
  @media screen and (max-width: 640px) {
    font-size: 32px;
  }
`;
export const Button = styled(LinkS)`
  text-decoration: none;
  color: #fdfdfd;
  border-color: #fdfdfd;
  background-color: transparent;
  border: 2px solid #fdfdfd;
  border-radius: 4px;
  text-align: center;
  padding: 15px 20px;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #fdfdfd;
    color: #c3ada5;
  }
`;
export const BtnSpan = styled.span`
  vertical-align: middle;
  margin-right: 5px;
`;
