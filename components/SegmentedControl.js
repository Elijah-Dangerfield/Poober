import React, { useState } from "react";
import styled from "styled-components";
import personLight from "../assets/person_light.png";
import personDark from "../assets/person_dark.png";
import earthDark from "../assets/earth_dark.png";
import earthLight from "../assets/earth_light.png";
import { appColor } from "../assets/colors";

export default function SegmentedControl(props) {
  const [selected, setSelected] = useState({
    current: props.selected
  });

  const selectLeft = () => {
    setSelected({ current: "left" });
    props.onClickLeft();
  };

  const selectRight = () => {
    setSelected({ current: "right" });
    props.onClickRight();
  };
  return (
    <Container>
      {selected.current === "left" ? <LeftCirlce /> : <RightCirlce />}
      <RightButton onPress={selectRight}>
        <RightImage
          style={{ resizeMode: "contain" }}
          source={selected.current === "right" ? earthDark : earthLight}
        />
      </RightButton>
      <LeftButton onPress={selectLeft}>
        <LeftImage
          style={{ resizeMode: "contain" }}
          source={selected.current === "left" ? personDark : personLight}
        />
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
const LeftCirlce = styled.View`
  background: ${appColor};
  height: 38px;
  width: 38px;
  border-radius: 19px;
  position: absolute;
  left: 8px;
`;
const RightCirlce = styled.View`
  background: ${appColor};
  height: 38px;
  width: 38px;
  border-radius: 19px;
  position: absolute;
  right: 8px;
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
