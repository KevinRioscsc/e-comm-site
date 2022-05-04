import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../Images/logo.svg";
import {
  FooterDiv,
  ContainerWidth,
  FooterNewsLetter,
  Title,
  Descr,
  Email,
  Policy,
  FooterFollow,
  FollowList,
  Li,
  FooterCustomer,
  ServiceList,
  ServiceLi,
  Link,
  FooterCopyRight,
  Logo,
  FooterFlex,
  TitleNew,
  LinkViso,
} from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <ContainerWidth>
          <FooterFlex>
            <FooterNewsLetter>
              <TitleNew>Sign up to our newsletter</TitleNew>
              <Descr>& get exclusive deals</Descr>
              <Email type={"input"} placeholder="Your email & hit enter" />
              <Policy>By signing up I agree to the Privacy Policy.</Policy>
            </FooterNewsLetter>
            <FooterFollow>
              <Title>Follow Us</Title>
              <FollowList>
                <Li className="hover">
                  <FaFacebookF size={20} />
                </Li>
                <Li className="hover">
                  <FaInstagram size={20} />
                </Li>
              </FollowList>
            </FooterFollow>
            <FooterCustomer>
              <Title>Customer Service</Title>
              <ServiceList>
                <ServiceLi>
                  <Link>Contact Us</Link>
                </ServiceLi>
                <ServiceLi>
                  <Link>Privacy Policy</Link>
                </ServiceLi>
              </ServiceList>
            </FooterCustomer>
          </FooterFlex>
          <FooterCopyRight>
            <LinkViso>Designed & Built by Viso</LinkViso>
            <Logo>
              © <img height="15px" width="70px" src={logo} alt="" />
            </Logo>
          </FooterCopyRight>
        </ContainerWidth>
      </FooterDiv>
    </>
  );
};

export default Footer;
