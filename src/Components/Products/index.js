import React, { useState } from "react";
import eye from "../../Images/eye.svg";
import cart from "../../Images/cart.svg";
import { data } from "./ProductData";
import { useProduct } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import {
  ProductsSection,
  ContainerWidth,
  Header,
  ProductsAllign,
  ProductsContainer,
  Product,
  ProductOverlay,
  ProductUi,
  ProductInfo,
  ProductCurrency,
  ProductButtons,
  ButtonLeft,
  BtnText,
  Img,
  ButtonRight,
  ProductLink,
  ProductImg,
  View,
} from "./ProductsStyled";

const Products = ({ other, product, id }) => {
  const { productSelect } = useProduct();
  return (
    <>
      <ProductsSection id={id}>
        <ContainerWidth>
          <Header other={other}>
            {other ? "Other Products" : "The Products"}
          </Header>
          <ProductsAllign>
            {data
              .filter((item) => item.productName !== product)
              .map((product) => {
                return (
                  <ProductsContainer
                    key={`${product.productName} ${product.price}`}
                  >
                    <Link
                      onClick={() => productSelect(product.productName)}
                      to={`/products/${product.productName}`}
                    >
                      <Product>
                        <ProductOverlay>
                          <ProductUi>
                            <ProductInfo>
                              {product.productName} ·{" "}
                              <ProductCurrency>$ </ProductCurrency>{" "}
                              {product.price}
                            </ProductInfo>
                            <ProductButtons>
                              <ButtonLeft>
                                <View>
                                  <BtnText>View More</BtnText>
                                  <Img src={eye} />
                                </View>
                              </ButtonLeft>
                              <ButtonRight>
                                <View>
                                  <BtnText>Out of Stock</BtnText>
                                  <Img src={cart} />
                                </View>
                              </ButtonRight>
                            </ProductButtons>
                          </ProductUi>
                        </ProductOverlay>
                        <ProductLink>
                          <ProductImg src={product.productImg} />
                        </ProductLink>
                      </Product>
                    </Link>
                  </ProductsContainer>
                );
              })}
          </ProductsAllign>
        </ContainerWidth>
      </ProductsSection>
    </>
  );
};

export default Products;
