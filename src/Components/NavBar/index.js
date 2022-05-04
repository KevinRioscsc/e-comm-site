import React from "react";
import navLogo from "../../Images/navLogo.svg";
import person from "../../Images/account.svg";
import cart from "../../Images/cart.svg";
import { BsPerson } from "react-icons/bs";
import {
  NavBarDiv,
  Logo,
  LogoText,
  NavBarUl,
  NavBarLi,
  NavBarLink,
} from "./NavBarStyle";

const NavBar = ({ toggle, toggleSignIn, dark }) => {
  return (
    <>
      <NavBarDiv>
        <Logo>
          <img src={navLogo} alt="logo" />
        </Logo>
        <NavBarUl>
          <NavBarLi>
            <NavBarLink dark={dark} href="#">
              Home
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} href="#">
              Features
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} href="#">
              Products
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} onClick={toggle}>
              Cart (0) <img src={cart} alt="" />
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} onClick={toggleSignIn}>
              Sign In <BsPerson />
            </NavBarLink>
          </NavBarLi>
        </NavBarUl>
      </NavBarDiv>
    </>
  );
};

export default NavBar;
