import React, { useState } from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { appColor } from "../constants/colors";
const FriendsPins = props => {
  const noFriendsState = (
    <>
      <Text>Add friends to see where they drop their pins</Text>
      <AddFriendsButton>
        <ColorButton
          text="Find Friends"
          loading={false}
          color={appColor}
          onClick={() => {
            props.navigateToFriends();
          }}
        />
      </AddFriendsButton>
    </>
  );
  return <Container>{noFriendsState}</Container>;
};

export default FriendsPins;
const Text = styled.Text``;
const AddFriendsButton = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 200px;
`;
const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
