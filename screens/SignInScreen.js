import React, { useState } from "react";
import styled from "styled-components";
import { appColor } from "../constants/colors";
import ColorButton from "../components/ColorButton";
import ArrowButton from "../components/ArrowButton";
import Input from "../components/FormInput";
import { signin } from "../api/user";
import { StatusBar } from "react-native";
import { Snackbar } from "react-native-paper";

const SignInScreen = props => {
  StatusBar.setBarStyle("dark-content", true);
  const [snackbar, setSnackbar] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  function hasErrors() {
    if (userInfo.email.trim() === "") {
      setErrors({ ...errors, email: "email can not be blank" });
      return true;
    }
    if (userInfo.password.trim() === "") {
      setErrors({ ...errors, password: "password cannot be blank" });
      return true;
    }

    return false;
  }
  function handleSignInClick() {
    if (!hasErrors()) {
      setLoading(true);
      signin({
        email: userInfo.email.trim(),
        password: userInfo.password.trim()
      })
        .then(() => {
          setLoading(false);
          props.navigation.navigate("Home");
        })
        .catch(error => {
          setLoading(false);
          setSnackbar(error.message);
        });
    }
  }
  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
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
      <Content>
        <Input
          hint="Enter email"
          title="Email"
          error={errors.email}
          onChangeText={text => {
            setErrors({ ...errors, email: "" });

            setUserInfo({ ...userInfo, email: text });
          }}
        />
        <Input
          hint="Enter password"
          title="Password"
          password={true}
          error={errors.password}
          onChangeText={text => {
            setErrors({ ...errors, password: "" });

            setUserInfo({ ...userInfo, password: text });
          }}
        />
      </Content>

      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            handleSignInClick();
          }}
          loading={loading}
          color={appColor}
          text="Sign In"
        />
      </ButtonsWrapper>
      <Snackbar
        visible={snackbar.length > 0}
        duration={3000}
        onDismiss={() => {
          setSnackbar("");
        }}
      >
        {snackbar}
      </Snackbar>
    </Container>
  );
};
export default SignInScreen;

const Content = styled.ScrollView`
  width: 100%;
`;
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
  padding-top: ${props => props.paddingTop};
`;

const ButtonsWrapper = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: 35px;
  justify-content: space-between;
`;
