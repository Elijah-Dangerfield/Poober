import React, { useState } from "react";
import styled from "styled-components";
import { appColor } from "../assets/colors";
import ColorButton from "../components/colorButton";
import ArrowButton from "../components/arrowButton";
import Input from "../components/formInput";

const RegisterScreen = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    confirmPassword: ""
  });

  function handleRegisterClick() {
    setErrors({ ...errors, confirmPassword: "Passwords Must Match" });
  }
  return (
    <Container>
      <Header>
        <BackButton>
          <ArrowButton
            onClick={() => {
              props.navigation.pop();
            }}
          />
        </BackButton>
        <AppName>Register</AppName>
      </Header>
      <Input
        hint="Enter your email"
        title="Email"
        error={errors.email}
        onChangeText={text => {
          setUserInfo({ ...userInfo, email: text });
        }}
      />
      <Input
        hint="Create a password"
        title="Password"
        password={true}
        onChangeText={text => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />
      <Input
        hint="Confirm password"
        password={true}
        error={errors.confirmPassword}
        onChangeText={text => {
          setUserInfo({ ...userInfo, confirmPassword: text });
        }}
      />

      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            handleRegisterClick();
          }}
          color={appColor}
          text="Register"
        />
      </ButtonsWrapper>
    </Container>
  );
}

const AppName = styled.Text`
  color: ${appColor};
  font-size: 32px;
  font-weight: 700;
  align-self: center;
`;

const BackButton = styled.View`
  position: absolute;
  left: 15px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const ButtonsWrapper = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: 60px;
  justify-content: space-between;
`;

export default RegisterScreen;