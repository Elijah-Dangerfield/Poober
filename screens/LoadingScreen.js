import React, { useEffect } from "react";
import styled from "styled-components";
import { appColor } from "../constants/colors";
import appIcon from "../assets/ic_toilet.png";
import * as firebase from "firebase";
import { ActivityIndicator } from "react-native-paper";
import { StatusBar } from "react-native";

const LoadingScreen = props => {
  StatusBar.setBarStyle("dark-content", true);

  useEffect(() => {
    const removeListener = firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? "Main" : "Auth");
    });
    return () => {
      removeListener();
    };
  }, []);
  return (
    <Container>
      <Header>
        <AppName>Poober</AppName>
        <ActivityIndicator animating={true} color={appColor} />
      </Header>
    </Container>
  );
};
export default LoadingScreen;

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
