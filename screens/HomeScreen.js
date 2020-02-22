import React, { useState } from "react";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";

export default function HomeScreen() {
  return (
    <Container>
      <UserHeader />
      <SegmentedControl
        onClickRight={() => {
          console.log("clicked right");
        }}
        onClickLeft={() => {
          console.log("clicked left");
        }}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
