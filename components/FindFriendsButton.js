import React from "react";
import styled from "styled-components";
import addFriends from "../assets/icon_add_friends.png";
import ArrowButton from "./ArrowButton";
const FindFriendsButton = props => {
  return (
    <ButtonWrapper onPress={props.onClick}>
      <Container>
        <Icon style={{ resizeMode: "contain" }} source={addFriends} />
        <Text>Find Friends</Text>
        <ArrowWrapper>
          <ArrowButton size={28} type="arrow_forward" />
        </ArrowWrapper>
      </Container>
    </ButtonWrapper>
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

const ButtonWrapper = styled.TouchableOpacity``;
const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  height: 50px;
  width: 100%;
  background: white;
  border-radius: 9px;
  elevation: 5;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;
