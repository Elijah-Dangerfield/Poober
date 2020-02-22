import React from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "./FriendsSection";
const AccountView = props => {
  return (
    <Container>
      <ArrowWrapper>
        <ArrowButton onClick={props.onClose} type="arrow_down" />
      </ArrowWrapper>
      <ProfilePicture />
      <Username>John Stamos</Username>
      <Text>313 total pins</Text>
      <FriendsSection />
    </Container>
  );
};
export default AccountView;

const Username = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const ArrowWrapper = styled.View`
  width: 100%;
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
