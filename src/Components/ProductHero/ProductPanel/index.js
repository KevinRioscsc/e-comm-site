import React, { useState } from "react";
import plus from "../../../Images/plus.svg";
import less from "../../../Images/less.svg";
import cart from "../../../Images/cart.svg";
import { useProduct } from "../../../Context/ProductContext";
import arrow from "../../../Images/arrow-down.svg";
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
  ArrowImg,
} from "./DetailStyled";

const ProductDetail = () => {
  const [infoSwitch, setInfo] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { product } = useProduct();
  const { productName, price, info } = product;
  return (
    <>
      <ProductPanel>
        <Heading>{productName}</Heading>
        <ProductPrice>
          <SpanCurrency>$</SpanCurrency>
          <SpanHeading>{price}</SpanHeading>
        </ProductPrice>
        <ProductQuantity>
          <QuantityWord>Quantity</QuantityWord>
          <QuantityNum>
            <Quantity placeholder={quantity} />
            <QuantityPlusLess>
              <QuantityPlus
                onClick={() => setQuantity((prev) => prev + 1)}
                img={plus}
              ></QuantityPlus>
              <QuantityLess
                onClick={() => setQuantity((prev) => prev - 1)}
                img={less}
              ></QuantityLess>
            </QuantityPlusLess>
          </QuantityNum>
        </ProductQuantity>
        <Btn>
          <BtnText>Out of Stock</BtnText>
          <CartImg src={cart} />
        </Btn>
        <InfoShipping>
          <TabList>
            <Tab
              onClick={() => {
                if (shipping) {
                  setShipping(false);
                }
                setInfo(!infoSwitch);
              }}
              onActive={infoSwitch}
            >
              Info
              <ArrowImg onActive={infoSwitch} src={arrow} />
            </Tab>
            <Tab
              onClick={() => {
                if (infoSwitch) {
                  setInfo(false);
                }
                setShipping(!shipping);
              }}
              onActive={shipping}
            >
              Shipping
              <ArrowImg onActive={shipping} src={arrow} />
            </Tab>
          </TabList>
          <ShippingDetails onActive={infoSwitch}>
            {info.map((item, index) => {
              return <Descr key={index}>{item}</Descr>;
            })}
          </ShippingDetails>
          <ShippingDetails onActive={shipping}>
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
          <Li className="hover">
            <FaPinterestP />
          </Li>
          <Li className="hover">
            <FaFacebookF />
          </Li>
          <Li className="hover">
            <FaTwitter />
          </Li>
        </ProductShare>
      </ProductPanel>
    </>
  );
};

export default ProductDetail;
