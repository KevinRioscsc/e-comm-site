import styled from "styled-components";

export const MaterialSection = styled.div`
  width: 100%;
  height: 610px;
  display: -webkit-box;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  &::before {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -4;
  }
`;
export const Heading = styled.div`
  font-size: 52px;
  color: #fdfdfd;
  text-align: center;
`;
