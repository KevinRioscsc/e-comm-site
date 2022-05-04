import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <>
      <NavBar dark={true} />
      <Footer />
    </>
  );
};

export default ProductPage;
