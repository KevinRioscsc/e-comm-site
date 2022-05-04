import { divide } from "lodash";
import React from "react";
import person from "../../Images/person.svg";
import Overlay from "../Overlay";
import {
  Dialog,
  DialogContainer,
  LoginHeader,
  Heading,
  LoginForm,
  FormGroup,
  Input,
  Btn,
  LoginHelp,
  Forgot,
  Register,
  Link,
} from "./TemplateStyled";

const Template = ({
  title,
  inputs,
  btnTitle,
  isRegistered,
  toggle,
  toggleVisbility,
  toggleSwitch,
}) => {
  return (
    <>
      <Dialog toggle={toggle}>
        <DialogContainer>
          <LoginHeader>
            <img src={person} alt="" />
            <Heading>{title}</Heading>
          </LoginHeader>
          <LoginForm>
            {inputs.map((item, index) => {
              return (
                <FormGroup key={index + item}>
                  <Input type={"text"} placeholder={item} />
                </FormGroup>
              );
            })}
            <Btn>{btnTitle}</Btn>
          </LoginForm>
          {isRegistered ? (
            <LoginHelp>
              <Forgot>Forgot your password?</Forgot>
              <Register>
                Not a registered user?
                <Link
                  onClick={() => {
                    toggleSwitch();
                    toggleVisbility();
                  }}
                >
                  {" "}
                  Sign up here.
                </Link>
              </Register>
            </LoginHelp>
          ) : (
            <div>
              <Register>
                Already registered?{" "}
                <Link
                  onClick={() => {
                    toggleSwitch();
                    toggleVisbility();
                  }}
                >
                  {" "}
                  Sign in here.
                </Link>
              </Register>
            </div>
          )}
        </DialogContainer>
      </Dialog>
      <div onClick={toggleVisbility}>
        <Overlay toggle={toggle} />
      </div>
    </>
  );
};

export default Template;
