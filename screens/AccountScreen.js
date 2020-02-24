import React from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "../components/FriendsSection";
const AccountView = props => {
  return (
    <Container>
      <ArrowWrapper>
        <ArrowButton
          onClick={() => {
            props.navigation.pop();
          }}
          type="arrow_down"
        />
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
  width: 100%;
  margin-left: 30px;
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
