import styled from "styled-components";

export const FeatureDiv = styled.div`
  background-color: ${(props) => props.color};
  padding: 80px 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  align-content: center;
  flex-direction: ${(props) => (props.side ? "row" : "row-reverse")};
`;
export const FeatureImg = styled.div`
  width: 60%;
  text-align: center;
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: ${(props) => (props.width ? "520px" : "440px")};
`;
export const FeatureText = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 0 30px;
  width: 40%;
`;
export const FeatureBox = styled.div`
  color: #fdfdfd;
`;
export const FeatureTitle = styled.h2`
  margin-bottom: 33px;
  font-size: 40px;
`;
export const FeatureDescr = styled.p`
  margin-bottom: 26px;
  font-size: 20px;
`;
