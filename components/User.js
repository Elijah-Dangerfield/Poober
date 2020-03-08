import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import poopEmoji from "../assets/poop_emoji.png";
import { ActivityIndicator } from "react-native-paper";
const User = props => {
  const state = {
    INITIAL: "initial",
    ADDING: "adding",
    ADDED: "added"
  };

  const [friendState, setFriendState] = useState(
    props.isFriend ? state.ADDED : state.INITIAL
  );

  const addButton = () => {
    const icon = () => {
      let icon;
      switch (friendState) {
        case state.ADDED:
          icon = (
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={32}
              color="black"
            />
          );
          break;
        case state.ADDING:
          icon = <ActivityIndicator animating={true} color="black" />;
          break;
        case state.INITIAL:
          icon = <Ionicons name="ios-add" size={32} color="black" />;
          break;
      }

      return icon;
    };
    return (
      <AddWrapper
        onPress={() => {
          console.log("state of this friend: " + friendState);
          if (friendState === state.ADDED) return;
          setFriendState(state.ADDING);
          props
            .onRequestFriend()
            .then(() => {
              setFriendState(state.ADDED);
            })
            .catch(e => {
              console.log("error adding friend" + e);
              setFriendState(state.INITIAL);
            });
        }}
      >
        {icon()}
      </AddWrapper>
    );
  };
  const you = () => (
    <AddWrapper>
      <Text>You</Text>
    </AddWrapper>
  );
  return (
    <Container>
      <ProfilePicture source={poopEmoji} />
      <Username>{props.username}</Username>

      {props.isCurrentUser ? you() : addButton()}
    </Container>
  );
};

export default User;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Username = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: red;
`;

const AddWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
const ProfilePicture = styled.Image`
  width: 32px;
  height: 32px;
  background: black;
  border-radius: 16px;
  margin-right: 10px;
`;
