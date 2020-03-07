import React, { useState } from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { appColor } from "../constants/colors";
import DisplayPost from "./DisplayPost";
import { FlatList } from "react-native";
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

  const friendsState = (
    <>
      <FlatList
        style={{ width: "100%" }}
        data={props.data}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DisplayPost
            rating={item.rating}
            username={item.displayName}
            text={item.postText}
          />
        )}
        keyExtractor={(item, index) => "key" + index}
      />
    </>
  );
  return <Container>{props.data ? friendsState : noFriendsState}</Container>;
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

const fakeData = [
  {
    rating: "5",
    username: "Nibraas Khan",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere neque nec elementum sagittis. Quisque et purus eget leo maximus fermentum. Morbi maximus pur"
  },
  {
    rating: "5",
    username: "Elijah Dangerfield",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    rating: "5",
    username: "Nibraas Khan",
    text: "Quisque et purus eget leo maximus fermentum. Morbi maximus pur"
  },
  {
    rating: "2",
    username: "Nibraas Khan",
    text:
      "In posuere neque nec elementum sagittis. Quisque et purus eget leo maximus fermentum. Morbi maximus pur"
  }
];
