import React, { useState } from "react";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";
import { Modal } from "react-native";
import AccountView from "../components/AccountView";
import AddFriends from "../components/AddFriends";

export default function HomeScreen(props) {
  const [selectedView, setSelectedView] = useState({
    current: "friends"
  });
  return (
    <Container>
      <UserHeader
        onClick={() => {
          props.navigation.navigate("Modal");
        }}
      />
      <SegmentedControl
        selected="left"
        onClickRight={() => {
          setSelectedView({ current: "world" });
        }}
        onClickLeft={() => {
          setSelectedView({ current: "friends" });
        }}
      />
      {selectedView.current === "friends" ? <FriendsPins /> : <WorldPins />}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
