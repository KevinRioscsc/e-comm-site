import styled from "styled-components";

export const ProductsSection = styled.div`
  padding: 112px 0 10px;
  background-color: #6aaebf;
  text-align: center;
`;
export const ContainerWidth = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;
export const Header = styled.h1`
  margin-bottom: 100px;
  color: #fdfdfd;
  font-size: 52px;
`;
export const ProductsAllign = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
`;
export const ProductsContainer = styled.div`
  width: 50%;
  float: left;
  margin-bottom: 100px;
  position: relative;
`;
export const Product = styled.div`
  width: 379px;
  height: 340px;
  padding: 10px;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;
export const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:before {
    position: absolute;
    border-top: 2px solid #fdfdfd;
    border-bottom: 2px solid #fdfdfd;

    transform: scale(0, 1);
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";

    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    border-right: 2px solid #fdfdfd;
    border-left: 2px solid #fdfdfd;
    transform: scale(1, 0);
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;
    box-sizing: border-box;
  }
  ${Product}:hover &:before,
  ${Product}:hover &:after {
    transform: scale(1);
    opacity: 1;
  }
`;
export const ProductUi = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const ProductInfo = styled.div`
  display: block;
  padding: 18px 15px 17px;
  font-size: 24px;
  color: #fff;
`;
export const ProductCurrency = styled.span`
  font-size: 16px;
  display: inline-block;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
`;
export const ProductButtons = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    left: 50%;
    height: 2px;
    opacity: 1;
    background-color: #fdfdfd;
    transition: all 0.3s ease-in-out;
  }
  ${Product}:hover &:before {
    width: 100%;
    left: 0;
  }
`;
export const ButtonLeft = styled.div`
  width: 50%;
  float: left;
  padding: 18px 15px 17px;
  box-sizing: border-box;
`;
export const View = styled.a`
  color: #fdfdfd;
`;
export const BtnText = styled.span`
  display: inline-block;
  margin-right: 15px;
`;
export const Img = styled.img`
  vertical-align: top;
`;
export const ButtonRight = styled.div`
  box-sizing: border-box;
  width: 50%;
  float: left;
  padding: 18px 15px 17px;
`;
export const ProductLink = styled.a`
  color: #fdfdfd;
`;
export const ProductImg = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100%;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  transform: translate(-50%, -55%) scale(1);
  ${Product}:hover & {
    transform: translate(-50%, -55%) scale(0.8);
  }
`;
