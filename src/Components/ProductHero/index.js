import React, { useEffect } from "react";
import ProductDetail from "./ProductPanel";
import ProductSlider from "./ProductSlider";
import OtherProduct from "./OtherProduct";
import { ProductHeroDetail } from "./HeroStyled";

const ProductHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductHeroDetail>
        <ProductDetail />
        <ProductSlider />
        <OtherProduct />
      </ProductHeroDetail>
    </>
  );
};

export default ProductHero;
