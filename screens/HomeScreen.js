import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";

export default function HomeScreen(props) {
  const [selectedView, setSelectedView] = useState({
    current: "friends"
  });
  StatusBar.setBarStyle("dark-content", true);

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
