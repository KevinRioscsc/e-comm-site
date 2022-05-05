import styled from "styled-components";

export const Slider = styled.ul`
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
`;
export const SliderLi = styled.li`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.current ? "1" : "0")};
  z-index: ${(props) => (props.current ? "1" : "0")};
  transition: opacity 1s;
`;
export const SliderLeft = styled.div`
  height: 60px;
  width: 60px;
  padding: 10px;
  top: 50%;
  position: absolute;
  z-index: 4;
  cursor: pointer;
  background: url(${(props) => props.img}) center no-repeat;
  transform: translateY(-50%) rotate(180deg);
  left: 15px;
`;
export const SLiderRight = styled.div`
  transform: translateY(-50%);
  right: 15px;
  height: 60px;
  width: 60px;
  padding: 10px;
  top: 50%;
  position: absolute;
  z-index: 4;
  background: url(${(props) => props.img}) center no-repeat;
  cursor: pointer;
`;
export const ProductImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
