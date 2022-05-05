import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import ProductHero from "../Components/ProductHero";
import Products from "../Components/Products";

const ProductPage = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <>
      <NavBar dark={true} />
      <ProductHero />
      <Products />
      <Footer />
    </>
  );
};

export default ProductPage;
