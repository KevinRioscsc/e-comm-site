import React from "react";
import NavBarAnimations from "../Components/NavBarAnimations";
import Footer from "../Components/Footer";
import ProductHero from "../Components/ProductHero";
import Products from "../Components/Products";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <NavBarAnimations dark={true} />
      <ProductHero />
      <Products other product={id} id={"products"} />
      <Footer />
    </>
  );
};

export default ProductPage;
