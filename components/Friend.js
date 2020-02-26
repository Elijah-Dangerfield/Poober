import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import poopEmoji from "../assets/poop_emoji.png";
const Friend = props => {
  return (
    <Container>
      <ProfilePicture source={poopEmoji} />
      <Username>Nibraas Khan</Username>
      <RemoveWrapper onPress={props.onRemove}>
        <Ionicons name="ios-close" size={38} color="red" />
      </RemoveWrapper>
    </Container>
  );
};

export default Friend;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Username = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;

const RemoveWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;
const ProfilePicture = styled.Image`
  width: 32px;
  height: 32px;
  background: black;
  border-radius: 16px;
  margin: 10px;
`;
