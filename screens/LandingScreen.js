import React, { useEffect } from "react";
import styled from "styled-components";
import { appColor } from "../constants/colors";
import appIcon from "../assets/ic_toilet.png";
import ColorButton from "../components/ColorButton";
import TransparentButton from "../components/TransparentButton";
import * as firebase from "firebase";
const LandingScreen = props => {
  return (
    <Container>
      <Header>
        <Title>Welcome to</Title>
        <AppName>Poober</AppName>
        <AppIcon source={appIcon}></AppIcon>
      </Header>
      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            console.log("Clicked Register");
            props.navigation.navigate("Register");
          }}
          color={appColor}
          text="Register"
        />
        <TransparentButton
          onClick={() => {
            console.log("Clicked SignIn");
            props.navigation.navigate("SignIn");
          }}
          textColor={appColor}
          text="Sign In"
        />
      </ButtonsWrapper>
    </Container>
  );
};

const Title = styled.Text`
  color: ${appColor};
  font-size: 36px;
  font-weight: 700;
`;

const AppIcon = styled.Image`
  margin-top: 50px;
`;

const AppName = styled.Text`
  color: ${appColor};
  font-size: 60px;
  font-weight: 700;
`;
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  align-items: center;
  margin-top: 100px;
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

export default LandingScreen;
