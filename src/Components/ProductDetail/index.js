import React from "react";
import plus from "../../Images/plus.svg";
import less from "../../Images/less.svg";
import cart from "../../Images/cart.svg";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import {
  ProductPanel,
  Heading,
  ProductPrice,
  SpanCurrency,
  SpanHeading,
  ProductQuantity,
  QuantityWord,
  QuantityNum,
  Quantity,
  QuantityPlusLess,
  QuantityPlus,
  PlusImg,
  QuantityLess,
  Btn,
  BtnText,
  CartImg,
  InfoShipping,
  TabList,
  Tab,
  ShippingDetails,
  Descr,
  ProductShare,
  Li,
} from "./DetailStyled";

const ProductDetail = () => {
  return (
    <>
      <ProductPanel>
        <Heading>Live</Heading>
        <ProductPrice>
          <SpanCurrency>$</SpanCurrency>
          <SpanHeading>65</SpanHeading>
        </ProductPrice>
        <ProductQuantity>
          <QuantityWord>Quantity</QuantityWord>
          <QuantityNum>
            <Quantity />
            <QuantityPlusLess>
              <QuantityPlus>
                <PlusImg src={plus} />
              </QuantityPlus>
              <QuantityLess>
                <PlusImg src={less} />
              </QuantityLess>
            </QuantityPlusLess>
          </QuantityNum>
        </ProductQuantity>
        <Btn>
          <BtnText>Out of Stock</BtnText>
          <CartImg src={cart} />
        </Btn>
        <InfoShipping>
          <TabList>
            <Tab>Info</Tab>
            <Tab>Shipping</Tab>
          </TabList>
          <ShippingDetails>
            <Descr>
              Great for virtually any desktop synth, drum machine, sampler or
              laptop. Bacca stands have been designed with live acts in mind, as
              they enable the placement of a soundcard, or any other gear below
              the main layer. Also great for desktop daily use, as they elevate
              monitors to a much better viewing angle. Built like a tank.
            </Descr>
            <Descr>295 x 251 x 195mm.</Descr>
            <Descr>Weight 380g.</Descr>
          </ShippingDetails>
          <ShippingDetails>
            <Descr>Delivery processing time: 2 working days.</Descr>
            <Descr>
              Secure payment for international customers: Visa, MasterCard and
              American Express through Stripe.
            </Descr>
            <Descr>
              Latin American customers: Visa, Mastercard, American Express,
              Argencard, Naranja through MercadoPago.
            </Descr>
          </ShippingDetails>
        </InfoShipping>
        <ProductShare>
          <Li>
            <FaPinterestP />
          </Li>
          <Li>
            <FaFacebookF />
          </Li>
          <Li>
            <FaTwitter />
          </Li>
        </ProductShare>
      </ProductPanel>
    </>
  );
};

export default ProductDetail;
