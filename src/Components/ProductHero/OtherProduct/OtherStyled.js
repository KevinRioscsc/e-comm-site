import styled from "styled-components";

export const OtherModels = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 3;
  width: 100%;
  text-align: center;
`;
export const Text = styled.span`
  cursor: pointer;
  display: inline-block;
  z-index: 99;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-7px);
  }
`;
export const TextSpan = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;
