import React from "react";
import styled from "styled-components";

const SmallFormEntry = props => {
  return (
    <Container>
      {props.title ? <Title>{props.title}</Title> : null}
      <Input
        value={props.text}
        secureTextEntry={props.password ? true : false}
        onChangeText={text => props.onChangeText(text)}
        placeholder={props.hint}
      />
      {props.error ? <ErrorText>{props.error}</ErrorText> : null}
    </Container>
  );
};
export default SmallFormEntry;
const Container = styled.View`
  padding: 10px 40px;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ErrorText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: red;
`;

const Input = styled.TextInput`
  font-size: 18px;
  height: 50px;
  padding: 10px;
  border: black;
  border-radius: 9px;
`;
