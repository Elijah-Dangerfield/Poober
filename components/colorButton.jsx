import React from "react";
import styled from "styled-components";

const ColorButton = props => {
  return (
    <Container
      onPress={() => {
        props.onClick();
      }}
      background={props.color}
    >
      <Text>{props.text}</Text>
    </Container>
  );
};

export default ColorButton;

const Container = styled.TouchableOpacity`
  background: ${props => props.background};
  height: 60px;
  width: 80%;
  border-radius: 12px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 600;
`;
