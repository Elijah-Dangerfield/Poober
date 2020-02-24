import React from "react";
import styled from "styled-components";
import addFriends from "../assets/icon_add_friends.png";
import ArrowButton from "./ArrowButton";
const FindFriendsButton = props => {
  return (
    <Container onPress={props.onClick}>
      <Icon style={{ resizeMode: "contain" }} source={addFriends} />
      <Text>Find Friends</Text>
      <ArrowWrapper>
        <ArrowButton size={28} type="arrow_forward" />
      </ArrowWrapper>
    </Container>
  );
};

export default FindFriendsButton;
const Icon = styled.Image`
  height: 22px;
  margin-left: 10px;
`;

const ArrowWrapper = styled.View`
  position: absolute;
  right: 15px;
`;
const Text = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-left: 20px;
`;
const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 9px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;
