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
  margin-top: 0;
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
export const Quantity = styled.input`
  display: inline-block;
  padding: 0;
  border: 0;
  width: 50px;
  height: auto;
  font-size: 28px;
  color: #4b4b4b;
  background: transparent;
`;
export const QuantityPlusLess = styled.div`
  display: inline-block;
  width: 10px;
  position: absolute;
  right: 0;
  top: 6px;
`;
export const QuantityPlus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  margin-bottom: 8px;
`;
export const PlusImg = styled.img``;
export const QuantityLess = styled.span`
  display: block;
  width: 10px;
  height: 2px;
  cursor: pointer;
  background-image: url(${(props) => props.img});
`;
export const ArrowImg = styled.img`
  margin-left: 10px;
  transform: ${(props) => (props.onActive ? " rotate(180deg)" : "0")};
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
`;
export const Btn = styled.div`
  margin-bottom: 23px;
  opacity: 0.5;
  color: #4b4b4b;
  border: 2px solid #4b4b4b;
  background-color: transparent;
  border-radius: 4px;
  vertical-align: middle;
  width: fit-content;
  padding: 15px 20px;
  font-size: 20px;
`;
export const BtnText = styled.span`
  color: #4b4b4b;
  margin-right: 10px;
`;
export const CartImg = styled.img``;
export const InfoShipping = styled.div`
  margin-bottom: 12px;
`;
export const TabList = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 0;
`;
export const Tab = styled.li`
  margin-right: 30px;
  padding-bottom: 5px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.onActive ? "100%" : "0")};
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2px;
    background-color: #4b4b4b;
    transition: width 0.3s ease-in-out;
  }
`;
export const ShippingDetails = styled.div`
  margin-top: 30px;
  display: ${(props) => (props.onActive ? "unset" : "none")};
  opacity: ${(props) => (props.onActive ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;
export const Descr = styled.p`
  margin-bottom: 22px;
`;
export const ProductShare = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li`
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
`;
