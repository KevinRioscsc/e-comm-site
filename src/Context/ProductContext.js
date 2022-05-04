import React, { useContext, useState } from "react";

const ProductInfo = React.createContext();

export const useProduct = () => {
  return useContext(ProductInfo);
};

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState("");

  const productSelect = (productName) => {
    setProduct(productName);
  };

  const value = {
    product,
    productSelect,
  };

  return <ProductInfo.Provider value={value}>{children}</ProductInfo.Provider>;
};

export default ProductContext;
