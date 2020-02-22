import { transparent } from "../assets/colors";
import styled from "styled-components";
import React from "react";

const TransparentButton = props => {
  return (
    <Container
      onPress={() => {
        props.onClick;
      }}
      background={transparent}
    >
      <Text textColor={props.textColor}>{props.text}</Text>
    </Container>
  );
};

export default TransparentButton;

const Container = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0);
  height: 60px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${props => props.textColor};
  font-size: 22px;
  font-weight: 600;
`;
