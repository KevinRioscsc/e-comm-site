import React from "react";
import {
  NavBarDiv,
  Logo,
  LogoText,
  NavBarUl,
  NavBarLi,
  NavBarLink,
} from "./NavBarStyle";

const NavBar = () => {
  return (
    <>
      <NavBarDiv>
        <Logo>
          <LogoText href="#">Stand</LogoText>
        </Logo>
        <NavBarUl>
          <NavBarLi>
            <NavBarLink href="#">Home</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#">Features</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#">Products</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#">Cart</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#">Sign In</NavBarLink>
          </NavBarLi>
        </NavBarUl>
      </NavBarDiv>
    </>
  );
};

export default NavBar;
