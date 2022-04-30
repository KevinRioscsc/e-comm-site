import styled from "styled-components";

export const FooterDiv = styled.footer`
  background-color: #cddce0;
  text-align: center;
  padding: 60px 0 30px;

  color: #4b4b4b;
`;
export const ContainerWidth = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  display: block;

  &::before {
    content: " ";
    display: table;
  }
`;
export const FooterFlex = styled.div`
  display: flex;
`;
export const FooterNewsLetter = styled.div`
  display: inline-block;
  width: 31.6239316239%;
  margin-right: 2.5641025641%;
`;
export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: 20px;
  color: #4b4b4b;
`;
export const TitleNew = styled.h4`
  margin-bottom: 5px;
  font-size: 20px;
  color: #4b4b4b;
`;
export const Descr = styled.p`
  margin-bottom: 35px;

  font-size: 14px;
  line-height: 22px;
`;
export const Email = styled.input`
  margin-bottom: 15px;
  font-size: 14px;
  height: 60px;
  padding: 0 20px;
  border-radius: 4px;
  background-color: transparent;
  box-sizing: border-box;
  border: 2px solid #4b4b4b;
  color: #4b4b4b;
  -webkit-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
`;
export const Policy = styled.p`
  font-size: 12px;
  line-height: 16px;
`;
export const FooterFollow = styled.div`
  display: inline-block;
  width: 31.6239316239%;
  margin-right: 2.5641025641%;
`;
export const FollowList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li`
  display: inline-block;
  padding: 0 10px;
`;
export const FooterCustomer = styled.div`
  display: inline-block;

  width: 31.6239316239%;
  margin-right: 0;
`;
export const ServiceList = styled.ul`
  font-size: 14px;
  line-height: 22px;
  list-style: none;
  padding: 0;
`;
export const ServiceLi = styled.div``;
export const Link = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  &::after {
    content: "";
    margin-left: auto;
    margin-right: auto;
    background-color: #4b4b4b;
    display: block;
    width: 0;
    margin-top: 2px;
    padding-top: 1px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after {
    width: 100%;
  }
`;
export const LinkViso = styled.a`
  margin-bottom: 30px;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  &::after {
    content: "";
    margin-left: auto;
    margin-right: auto;
    background-color: #4b4b4b;
    display: block;
    width: 0;
    margin-top: 2px;
    padding-top: 1px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after {
    width: 100%;
  }
`;
export const FooterCopyRight = styled.div`
  width: 100%;
  margin-top: 90px;
  display: inline-block;
`;
export const Logo = styled.div`
  margin-left: -10px;
`;
