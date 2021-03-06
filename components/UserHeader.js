import React, { useState } from "react";
import styled from "styled-components";
import poopEmoji from "../assets/poop_emoji.png";
export default function UserHeader(props) {
  return (
    <TouchableWrapper onPress={props.onClick}>
      <Header>
        <ProfilePicture source={poopEmoji} />
        <UserTextWrapper>
          <Username>{props.displayName}</Username>
          <Status>Last pooped: yesterday</Status>
        </UserTextWrapper>
      </Header>
    </TouchableWrapper>
  );
}

const TouchableWrapper = styled.TouchableOpacity`
  width: 100%;
`;
const Username = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const UserTextWrapper = styled.View``;
const Status = styled.Text`
  color: grey;
`;
const ProfilePicture = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin: 0px 10px 0px 20px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
