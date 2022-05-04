import styled from "styled-components";

export const ProductPanel = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 132px;
  padding-right: 100px;
  float: left;
  width: 31.6239316239%;
  margin-right: 0;
`;
export const Heading = styled.h2`
  margin-bottom: 5px;
  font-size: 48px;
`;
export const ProductPrice = styled.div`
  margin-bottom: 11px;
`;
export const SpanCurrency = styled.span`
  transform: translateY(-5px);
  display: inline-block;
  margin-right: 5px;
  font-size: 20px;
`;
export const SpanHeading = styled.span`
  font-size: 36px;
`;
export const ProductQuantity = styled.div`
  margin-bottom: 23px;
  font-size: 28px;
`;
export const QuantityWord = styled.span`
  margin-right: 30px;
`;
export const QuantityNum = styled.div`
  display: inline-block;
  width: 60px;
  position: relative;
`;
export const Quantity = styled.input`
  display: inline-block;
  padding: 0;
  border: 0;
  width: 50px;
  height: auto;
  font-size: 28px;
  color: #4b4b4b;
`;
export const QuantityPlusLess = styled.div`
  display: inline-block;
  width: 10px;
  position: absolute;
  right: 0;
  top: 12px;
`;
export const QuantityPlus = styled.span`
  margin-bottom: 8px;
  display: block;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
export const PlusImg = styled.img``;
export const QuantityLess = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
export const Btn = styled.div`
  margin-bottom: 23px;
  opacity: 0.5;
  color: #4b4b4b;
  border-color: #4b4b4b;
  background-color: transparent;
  border-radius: 4px;
  vertical-align: middle;
  padding: 15px 20px;
  font-size: 20px;
`;
export const BtnText = styled.span`
  color: #4b4b4b;
`;
export const CartImg = styled.img``;
export const InfoShipping = styled.div`
  margin-bottom: 12px;
`;
export const TabList = styled.ul`
  font-size: 20px;
  list-style: none;
`;
export const Tab = styled.li`
  margin-right: 30px;
  padding-bottom: 5px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
`;
export const ShippingDetails = styled.div`
  margin-top: 30px;
  display: none;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`;
export const Descr = styled.p`
  margin-bottom: 22px;
`;
export const ProductShare = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  display: inline-block;
  margin-right: 20px;
`;
