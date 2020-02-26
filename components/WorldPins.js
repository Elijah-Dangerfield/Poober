import React, { useState } from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { appColor } from "../constants/colors";
const WorldPins = () => {
  return (
    <Container>
      <Text>No one has dropped a pin here yet. Be the first!</Text>
      <DropPinButton>
        <ColorButton
          text="Drop Pin"
          loading={false}
          color={appColor}
          onClick={() => {}}
        />
      </DropPinButton>
    </Container>
  );
};

export default WorldPins;
const Text = styled.Text``;
const DropPinButton = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 200px;
`;
const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
