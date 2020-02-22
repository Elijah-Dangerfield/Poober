import React, { useState } from "react";
import styled from "styled-components";
import personLight from "../assets/person_light.png";
import personDark from "../assets/person_dark.png";
import earthDark from "../assets/earth_dark.png";
import earthLight from "../assets/earth_light.png";
import { appColor } from "../assets/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SegmentedControl() {
  const [selected, setSelected] = useState({
    current: "left"
  });

  const selectLeft = () => {
    setSelected({ current: "left" });
  };

  const selectRight = () => {
    setSelected({ current: "right" });
  };
  return (
    <Container>
      {selected.current == "left" ? (
        <Cirlce left="8px" />
      ) : (
        <Cirlce right="8px" />
      )}
      <RightButton
        onPress={() => {
          selectRight();
        }}
      >
        <RightImage style={{ resizeMode: "contain" }} source={earthLight} />
      </RightButton>
      <LeftButton
        onPress={() => {
          selectLeft();
        }}
      >
        <LeftImage style={{ resizeMode: "contain" }} source={earthLight} />
      </LeftButton>
    </Container>
  );
}

const RightButton = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 20px;
  position: absolute;
  right: 8px;
`;

const LeftButton = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 20px;
  position: absolute;
  left: 8px;
`;
const Cirlce = styled.View`
  background: ${appColor};
  height: 38px;
  width: 38px;
  border-radius: 19px;
  position: absolute;
  left: ${props => {
    return props.left ? props.left : 0;
  }};
  right: ${props => {
    return props.right ? props.right : 0;
  }};
`;
const LeftImage = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 20px;
  position: absolute;
`;

const RightImage = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 20px;
  position: absolute;
`;

const Container = styled.View`
  width: 122px;
  height: 44px;
  background: rgba(0, 0, 0, 0);
  border-radius: 22px;
  border-width: 2px;
  margin: 20px;
  align-items: center;
  flex-direction: row;
  padding: 0;
`;
