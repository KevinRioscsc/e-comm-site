import styled from "styled-components";

export const CartPreview = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.toggle ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  width: 100%;
  max-width: 400px;
  height: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #fdfdfd;
`;
export const CartHeader = styled.div`
  padding-top: 25px;
  height: 110px;
  width: 100%;
  border-bottom: 2px solid #f0f0f0;
`;
export const CartControls = styled.div`
  color: #4b4b4b;
`;
export const Span = styled.span`
  font-size: 14px;
  line-height: 22px;
`;
export const Img = styled.img`
  float: right;
  margin-top: 5px;
  cursor: pointer;
`;
export const ItemColumns = styled.div`
  margin-top: 45px;
  vertical-align: baseline;
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
export const Left = styled.div`
  width: 50%;
  float: left;
`;
export const Right = styled.div`
  text-align: right;
  width: 50%;
  float: left;
`;
export const CartItems = styled.div`
  position: absolute;
  top: 137px;
  right: -17px;
  bottom: 0;
  left: 0;
  padding: 0 46px 0 30px;
  overflow-y: scroll;
`;
export const Btn = styled.a`
  width: 100%;
  margin-top: 30px;
  display: inline-block;
  padding: 19px 20px;
  font-size: 14px;
  border-color: #de693f;
  color: #de693f;
  border: 2px solid #de693f;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  opacity: 0.5;
`;
export const ImgTag = styled.img`
  margin-left: 5px;
`;
