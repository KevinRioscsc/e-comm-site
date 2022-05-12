import React from "react";
import { NavBarMobile, MenuList, MenuItem, NavBarLink } from "./MobileStyled";

const Mobile = ({ open, toggle, toggleSignIn }) => {
  return (
    <>
      <NavBarMobile open={open}>
        <MenuList>
          <MenuItem>
            <NavBarLink>Home</NavBarLink>
          </MenuItem>
          <MenuItem>
            <NavBarLink to="feature" smooth={true} duration={500}>
              Features
            </NavBarLink>
          </MenuItem>
          <MenuItem>
            <NavBarLink to="products" smooth={true} duration={500}>
              {" "}
              Products
            </NavBarLink>
          </MenuItem>
          <MenuItem>
            <NavBarLink>-</NavBarLink>
          </MenuItem>
          <MenuItem>
            <NavBarLink onClick={toggleSignIn}>Sign In</NavBarLink>
          </MenuItem>
          <MenuItem>
            <NavBarLink onClick={toggle}>Cart</NavBarLink>
          </MenuItem>
        </MenuList>
      </NavBarMobile>
    </>
  );
};

export default Mobile;
