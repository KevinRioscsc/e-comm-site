import React from "react";
import cart from "../../Images/cart2.svg";
import cross from "../../Images/cross.svg";
import Overlay from "../Overlay";
import {
  CartPreview,
  CartHeader,
  CartControls,
  Span,
  Img,
  ItemColumns,
  Left,
  Right,
  CartItems,
  Btn,
  ImgTag,
} from "./CartStyled";

const Cart = ({ toggle, setToggle }) => {
  return (
    <>
      <CartPreview toggle={toggle}>
        <CartHeader>
          <CartControls>
            <Span>Items added to cart</Span>
            <Img src={cross} onClick={setToggle} />
          </CartControls>
          <ItemColumns>
            <Left>Item</Left>
            <Right>SubTotal</Right>
          </ItemColumns>
        </CartHeader>
        <CartItems>
          <ItemColumns>
            <Left>SubTotal</Left>
            <Right>$0.00</Right>
          </ItemColumns>
          <Btn>
            Your cart is empty
            <ImgTag src={cart} />
          </Btn>
        </CartItems>
      </CartPreview>
      <Overlay toggle={toggle} />
    </>
  );
};

export default Cart;
