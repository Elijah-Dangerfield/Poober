import React, { useState } from "react";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";
import { Modal } from "react-native";
import AccountView from "../components/AccountView";

export default function HomeScreen() {
  const [selectedView, setSelectedView] = useState({
    current: "friends"
  });
  const [showAccount, setShowAccount] = useState(false);
  return (
    <Container>
      <Modal
        onRequestClose={() => {
          setShowAccount(false);
        }}
        animationType="slide"
        visible={showAccount}
      >
        <AccountView
          onClose={() => {
            setShowAccount(false);
          }}
        />
      </Modal>
      <UserHeader
        onClick={() => {
          setShowAccount(true);
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
