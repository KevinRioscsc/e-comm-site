import React, { useState } from "react";
import {
  Slider,
  SliderLi,
  ProductImg,
  SliderLeft,
  SLiderRight,
} from "./SliderStyled";
import { useProduct } from "../../../Context/ProductContext";
import arrow from "../../../Images/arrow-right.svg";

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current > length) {
      setCurrent(0);
    } else {
      setCurrent(current === length ? 0 : current + 1);
    }
  };
  const prevSlide = () => {
    if (current > length) {
      setCurrent(0);
    } else {
      setCurrent(current === 0 ? length : current - 1);
    }
  };

  console.log(current);
  const { product } = useProduct();
  const { Images } = product;
  const length = Images.length - 1;
  return (
    <>
      <Slider>
        <SliderLeft img={arrow} onClick={prevSlide}></SliderLeft>
        <SLiderRight img={arrow} onClick={nextSlide}></SLiderRight>
        {Images.map((item, index) => {
          return (
            <SliderLi current={current === index ? true : false} key={index}>
              <ProductImg img={item}></ProductImg>
            </SliderLi>
          );
        })}
      </Slider>
    </>
  );
};

export default ProductSlider;
