import React, { useState } from "react";
import styled from "styled-components";
import { appColor } from "../assets/colors";
import ColorButton from "../components/colorButton";
import ArrowButton from "../components/arrowButton";
import Input from "../components/formInput";

const SignInScreen = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  function handleSignInClick() {
    setErrors({ ...errors, confirm: "Password wrong" });
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
        <AppName>Sign In</AppName>
      </Header>
      <Input
        hint="Enter email"
        title="Email"
        error={errors.email}
        onChangeText={text => {
          setUserInfo({ ...userInfo, email: text });
        }}
      />
      <Input
        hint="Enter password"
        title="Password"
        password={true}
        error={errors.password}
        onChangeText={text => {
          setUserInfo({ ...userInfo, password: text });
        }}
      />

      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            handleSignInClick();
          }}
          color={appColor}
          text="Sign In"
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

export default SignInScreen;
