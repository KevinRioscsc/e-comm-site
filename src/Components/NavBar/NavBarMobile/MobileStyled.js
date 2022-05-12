import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavBarMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 120px 0 0 30px;
  opacity: ${(props) => (props.open ? "1" : "0")};
  background-color: #e0865a;
  pointer-events: ${(props) => (props.open ? "visible" : "none")};
  z-index: 6;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  box-sizing: border-box;
`;
export const MenuList = styled.ul`
  line-height: 1.5;
  text-align: center;
  padding: 0;
  list-style: none;
  animation: fadeInUp 0.8s cubic-bezier(0, 0.43, 0.24, 0.99);
`;
export const MenuItem = styled.li`
  margin-bottom: 20px;
  text-align: left;
  font-size: 20px;
  position: relative;
`;
export const NavBarLink = styled(LinkS)`
  cursor: pointer;
  color: #fdfdfd;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
`;
