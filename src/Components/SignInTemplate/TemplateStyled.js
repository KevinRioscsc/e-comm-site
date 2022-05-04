import styled from "styled-components";

export const Dialog = styled.div`
  pointer-events: all;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  max-width: 440px;
  transform: ${(props) =>
    props.toggle ? "translate3d(-50%, -50%, 0)" : "translate3d(-50%,-90%,0)"};
  border-radius: 4px;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 10%);
  transition: all 0.3s ease-in-out;
`;
export const DialogContainer = styled.div`
  width: 100%;
  float: left;
`;
export const LoginHeader = styled.div`
  margin-bottom: 33px;
  text-align: center;
`;
export const Heading = styled.h3`
  font-size: 28px;
  margin: 0;
`;
export const LoginForm = styled.form`
  margin-bottom: 20px;
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
  &::before {
    content: "";
    display: table;
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Input = styled.input`
  float: left;
  border: 2px solid #cddce0;
  color: #4b4b4b;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  height: 60px;
  padding: 0 20px;
  border-radius: 4px;
  background-color: transparent;
  box-sizing: border-box;
  font-family: sofia-pro, sans-serif;
`;
export const Btn = styled.button`
  width: 100%;
  padding: 19px 20px;
  font-size: 14px;
  border-color: #de693f;
  border: 1px solid #de693f;
  color: #de693f;
  background-color: transparent;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #de693f;
    color: white;
  }
`;
export const LoginHelp = styled.div``;
export const Forgot = styled.p`
  margin-bottom: 20px;
`;
export const Register = styled.p``;

export const Link = styled.a`
  color: black;
  cursor: pointer;
`;
