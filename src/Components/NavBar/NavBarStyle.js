import styled from "styled-components";

export const NavBarDiv = styled.nav`
  height: 50px;
  width: 96%;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.69px;
  line-height: 26px;
  color: #fdfdfd;
`;
export const Logo = styled.div`
  margin-top: 28px;
`;
export const LogoText = styled.a`
  text-decoration: none;
  color: #fdfdfd;
  font-size: 36px;
  font-weight: 100;
`;
export const NavBarUl = styled.ul`
  display: flex;
  padding-top: 28px;
  margin: 0;
  gap: 80px;
`;
export const NavBarLi = styled.li`
  list-style: none;
  position: relative;
`;
export const NavBarLink = styled.a`
  text-decoration: none;

  font-size: 15px;
  color: #fdfdfd;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #fdfdfd;
    transition: all 0.6s cubic-bezier(0.4, 0, 1, 1);
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
