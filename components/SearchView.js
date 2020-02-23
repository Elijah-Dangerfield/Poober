import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchView = props => {
  const [showCancel, setShowCancel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cancel = () => (
    <TouchableOpacity
      onPress={() => {
        setSearchTerm("");
        setShowCancel(false);
      }}
    >
      <Text>Cancel</Text>
    </TouchableOpacity>
  );
  return (
    <Container>
      <InputWrapper
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "white",
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "black",
          shadowOpacity: 0.25
        }}
      >
        <Ionicons name="md-search" size={28} color="black" />

        <Input
          value={searchTerm}
          secureTextEntry={props.password ? true : false}
          onChangeText={text => {
            setShowCancel(text.length > 0);
            setSearchTerm(text);
          }}
          placeholder={props.hint}
        />
      </InputWrapper>
      {showCancel ? cancel() : null}
    </Container>
  );
};
export default SearchView;
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
const Cancel = styled.TouchableOpacity`
  flex: 1;
`;
const Text = styled.Text`
  margin: 5px;
`;
const Input = styled.TextInput`
  font-size: 18px;
  margin-left: 10px;
`;

const InputWrapper = styled.View`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  flex: 7;
`;
