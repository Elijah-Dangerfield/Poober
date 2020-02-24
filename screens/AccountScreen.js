import React from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "../components/FriendsSection";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signout } from "../api/user";
import { StatusBar } from "react-native";

const AccountView = props => {
  StatusBar.setBarStyle("dark-content", true);

  const handleSignOut = () => {
    signout();
    props.navigation.navigate("Loading");
  };
  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <ArrowWrapper>
        <ArrowButton
          onClick={() => {
            props.navigation.pop();
          }}
          type="arrow_down"
        />
        <TouchableOpacity onPress={handleSignOut}>
          <Signout>Sign Out</Signout>
        </TouchableOpacity>
      </ArrowWrapper>
      <Content>
        <ProfileWrapper>
          <ProfilePicture />
          <Username>John Stamos</Username>
          <Text>313 total pins</Text>
        </ProfileWrapper>

        <FriendsSection
          onClickFind={() => {
            console.log("Hello World");
            props.navigation.navigate("AddFriends");
          }}
        />
      </Content>
    </Container>
  );
};
export default AccountView;

const Content = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;
const Username = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

const Container = styled.SafeAreaView`
  padding-top: ${props => props.paddingTop};
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const ArrowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;
const Text = styled.Text`
  color: grey;
`;
const Signout = styled.Text`
  color: red;
  font-weight: normal;
  font-size: 18px;
`;
const ProfilePicture = styled.Image`
  width: 62px;
  height: 62px;
  background: black;
  border-radius: 31px;
  margin-bottom: 10px;
`;
