import styled from "styled-components";

export const SpecSection = styled.div`
  background-color: #fdfdfd;
  padding: 100px 15px 10px;
  display: flex;
  align-items: baseline;

  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  z-index: 2;

  backface-visibility: hidden;
`;
export const Spec = styled.div`
  flex: 0 1 20%;
  min-width: 250px;
  padding: 0 15px 70px;
  box-sizing: border-box;
  text-align: center;
`;
export const SpecIcon = styled.div`
  margin-bottom: 30px;
`;
export const SpecText = styled.p`
  font-size: 18px;
`;
