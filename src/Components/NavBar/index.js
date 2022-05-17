import React, { useState } from "react";
import navLogo from "../../Images/navLogo.svg";
import darkLogo from "../../Images/logo.svg";
import darkCart from "../../Images/darkCart.svg";
import { Link } from "react-router-dom";
import cart from "../../Images/cart.svg";
import { BsPerson } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import HamBurger from "./Hamburger";
import Mobile from "./NavBarMobile";
import { NavBarDiv, Logo, NavBarUl, NavBarLi, NavBarLink } from "./NavBarStyle";

const NavBar = ({ toggle, toggleSignIn, dark }) => {
  const [toggleHam, setHam] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavBarDiv>
        <Link to={"/"} onClick={toggleHome}>
          <Logo>
            <img src={dark ? darkLogo : navLogo} alt="logo" />
          </Logo>
        </Link>
        <NavBarUl>
          <NavBarLi>
            <NavBarLink dark={dark}>Home</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} to="feature" smooth={true} duration={500}>
              Features
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} to="products" smooth={true} duration={500}>
              Products
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} onClick={toggle}>
              Cart (0) <img src={dark ? darkCart : cart} alt="" />
            </NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink dark={dark} onClick={toggleSignIn}>
              Sign In <BsPerson />
            </NavBarLink>
          </NavBarLi>
        </NavBarUl>
      </NavBarDiv>
      <div onClick={() => setHam((prev) => !prev)}>
        <HamBurger toggle={toggleHam} dark={dark} />
      </div>

      <Mobile toggle={toggle} toggleSignIn={toggleSignIn} open={toggleHam} />
    </>
  );
};

export default NavBar;
