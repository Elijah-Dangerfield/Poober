import React, { useState } from "react";
import styled from "styled-components";
import poopEmoji from "../assets/poop_emoji.png";
import { Ionicons } from "@expo/vector-icons";
import { appColor } from "../constants/colors";

export default function DisplayPost(props) {
  return (
    <TouchableWrapper>
      <Header>
        <ProfilePicture source={poopEmoji} />
        <UserTextWrapper>
          <Username>{props.username}</Username>
          <Status>{props.rating} stars</Status>
        </UserTextWrapper>
      </Header>
      <PostText>{props.text}</PostText>
    </TouchableWrapper>
  );
}

const TouchableWrapper = styled.TouchableOpacity`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;
const Username = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const UserTextWrapper = styled.View``;

const Status = styled.Text`
  color: grey;
`;
const PostText = styled.Text`
  color: black;
  margin-top: 10px;
`;
const ProfilePicture = styled.Image`
  width: 30px;
  height: 30px;
  background: black;
  border-radius: 15px;
  margin-right: 10px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
