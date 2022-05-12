import React, { useContext, useState, useEffect } from "react";
import { productDetails } from "../Components/ProductHero/ProductDetail";

const ProductInfo = React.createContext();

export const useProduct = () => {
  return useContext(ProductInfo);
};

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState({});

  const productSelect = (productName) => {
    const foundProduct = productDetails.find(
      (item) => item.productName === productName
    );
    setProduct(foundProduct);
  };
  useEffect(() => {
    const foundProduct = productDetails.find(
      (item) => item.productName === localStorage.getItem("productName")
    );
    setProduct(foundProduct);
  }, []);
  const value = {
    product,
    productSelect,
  };

  return <ProductInfo.Provider value={value}>{children}</ProductInfo.Provider>;
};

export default ProductContext;
