import React from "react";
import ProductDetail from "./ProductPanel";
import ProductSlider from "./ProductSlider";
import { ProductHeroDetail } from "./HeroStyled";

const ProductHero = () => {
  return (
    <>
      <ProductHeroDetail>
        <ProductDetail />
        <ProductSlider />
      </ProductHeroDetail>
    </>
  );
};

export default ProductHero;
