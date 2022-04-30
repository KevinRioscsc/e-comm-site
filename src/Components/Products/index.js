import React, { useState } from "react";
import eye from "../../Images/eye.svg";
import cart from "../../Images/cart.svg";
import img from "../../Images/live.png";
import img1 from "../../Images/studio.png";
import img2 from "../../Images/desktop.png";
import { data } from "./ProductData";
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
  Link,
  BtnText,
  Img,
  ButtonRight,
  ProductLink,
  ProductImg,
} from "./ProductsStyled";

const Products = () => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <ProductsSection>
        <ContainerWidth>
          <Header>The Products</Header>
          <ProductsAllign>
            <ProductsContainer>
              <Product>
                <ProductOverlay className="hoverme">
                  <ProductUi>
                    <ProductInfo>
                      Live · <ProductCurrency>$ </ProductCurrency> 65
                    </ProductInfo>
                    <ProductButtons>
                      <ButtonLeft>
                        <Link>
                          <BtnText>View More</BtnText>
                          <Img src={eye} />
                        </Link>
                      </ButtonLeft>
                      <ButtonRight>
                        <Link>
                          <BtnText>Out of Stock</BtnText>
                          <Img src={cart} />
                        </Link>
                      </ButtonRight>
                    </ProductButtons>
                  </ProductUi>
                </ProductOverlay>
                <ProductLink>
                  <ProductImg src={img} />
                </ProductLink>
              </Product>
            </ProductsContainer>
            <ProductsContainer>
              <Product
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <ProductOverlay hover={hover}>
                  <ProductUi>
                    <ProductInfo>
                      Studio · <ProductCurrency>$ </ProductCurrency> 55
                    </ProductInfo>
                    <ProductButtons hover={hover}>
                      <ButtonLeft>
                        <Link>
                          <BtnText>View More</BtnText>
                          <Img src={eye} />
                        </Link>
                      </ButtonLeft>
                      <ButtonRight>
                        <Link>
                          <BtnText>Out of Stock</BtnText>
                          <Img src={cart} />
                        </Link>
                      </ButtonRight>
                    </ProductButtons>
                  </ProductUi>
                </ProductOverlay>
                <ProductLink>
                  <ProductImg hover={hover} src={img1} />
                </ProductLink>
              </Product>
            </ProductsContainer>
            <ProductsContainer>
              <Product>
                <ProductOverlay>
                  <ProductUi>
                    <ProductInfo>
                      Desktop · <ProductCurrency>$ </ProductCurrency> 55
                    </ProductInfo>
                    <ProductButtons>
                      <ButtonLeft>
                        <Link>
                          <BtnText>View More</BtnText>
                          <Img src={eye} />
                        </Link>
                      </ButtonLeft>
                      <ButtonRight>
                        <Link>
                          <BtnText>Out of Stock</BtnText>
                          <Img src={cart} />
                        </Link>
                      </ButtonRight>
                    </ProductButtons>
                  </ProductUi>
                </ProductOverlay>
                <ProductLink>
                  <ProductImg src={img2} />
                </ProductLink>
              </Product>
            </ProductsContainer>
          </ProductsAllign>
        </ContainerWidth>
      </ProductsSection>
    </div>
  );
};

export default Products;
