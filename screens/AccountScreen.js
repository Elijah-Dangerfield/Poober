import React from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "../components/FriendsSection";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signout } from "../api/user";
const AccountView = props => {
  const handleSignOut = () => {
    signout();
    props.navigation.navigate("Loading");
  };
  return (
    <Container>
      <ArrowWrapper>
        <ArrowButton
          onClick={() => {
            props.navigation.pop();
          }}
          type="arrow_down"
        />
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={{ color: "red" }}>Sign Out</Text>
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
  font-weight: 600;
  font-size: 22px;
`;

const Container = styled.SafeAreaView`
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

const ProfilePicture = styled.Image`
  width: 62px;
  height: 62px;
  background: black;
  border-radius: 31px;
  margin-bottom: 10px;
`;
