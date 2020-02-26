import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { appColor } from "../constants/colors";
import ColorButton from "../components/ColorButton";
import ArrowButton from "../components/ArrowButton";
import Input from "../components/FormInput";
import { signup } from "../api/user";
import { Snackbar } from "react-native-paper";

const RegisterScreen = props => {
  StatusBar.setBarStyle("dark-content", true);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  function validEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email);
  }

  function hasErrors() {
    if (userInfo.name.trim() === "") {
      setErrors({ ...errors, name: "name can not be blank" });
      return true;
    }
    if (userInfo.email.trim() === "") {
      setErrors({ ...errors, email: "email cannot be blank" });
      return true;
    }
    if (!validEmail()) {
      setErrors({ ...errors, email: "inproper email format" });
      return true;
    }
    if (userInfo.password.trim() === "") {
      setErrors({ ...errors, password: "password can not be blank" });
      return true;
    }
    if (userInfo.confirmPassword.trim() === "") {
      setErrors({ ...errors, confirmPassword: "password can not be blank" });
      return true;
    }
    if (userInfo.password.trim() !== userInfo.confirmPassword.trim()) {
      setErrors({ ...errors, password: "passwords must match" });
      return true;
    }
    if (userInfo.password.length < 6) {
      setErrors({
        ...errors,
        password: "password must be at least 6 characters"
      });
      return true;
    }

    return false;
  }

  function handleRegisterClick() {
    if (!hasErrors()) {
      setLoading(true);
      signup({
        email: userInfo.email.trim(),
        password: userInfo.password.trim(),
        displayName: userInfo.name.trim()
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
        <AppName>Register</AppName>
      </Header>
      <Content>
        <Input
          hint="Choose a display name"
          title="Name"
          error={errors.name}
          onChangeText={text => {
            setErrors({ ...errors, name: "" });
            setUserInfo({ ...userInfo, name: text });
          }}
        />
        <Input
          hint="Enter your email"
          title="Email"
          error={errors.email}
          onChangeText={text => {
            setErrors({ ...errors, email: "" });
            setUserInfo({ ...userInfo, email: text });
          }}
        />
        <Input
          hint="Create a password"
          title="Password"
          error={errors.password}
          password={true}
          onChangeText={text => {
            setErrors({ ...errors, password: "" });
            setUserInfo({ ...userInfo, password: text });
          }}
        />
        <Input
          hint="Confirm password"
          password={true}
          error={errors.confirmPassword}
          onChangeText={text => {
            setErrors({ ...errors, confirmPassword: "" });
            setUserInfo({ ...userInfo, confirmPassword: text });
          }}
        />
      </Content>

      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            handleRegisterClick();
          }}
          loading={loading}
          color={appColor}
          text="Register"
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

export default RegisterScreen;
