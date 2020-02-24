import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchView = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cancelButton = isEditing ? (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Text>Cancel</Text>
    </TouchableOpacity>
  ) : (
    <></>
  );

  const clearButton =
    searchTerm.length > 0 ? (
      <TouchableOpacity
        onPress={() => {
          setSearchTerm("");
        }}
      >
        <Ionicons name="md-close" size={28} color="grey" />
      </TouchableOpacity>
    ) : (
      <></>
    );

  const searchIcon = !isEditing ? (
    <Ionicons name="md-search" size={28} color="black" />
  ) : null;

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
        {searchIcon}
        <Input
          onBlur={() => {
            setIsEditing(false);
          }}
          onFocus={() => {
            setIsEditing(true);
          }}
          value={searchTerm}
          secureTextEntry={props.password ? true : false}
          onChangeText={setSearchTerm}
          placeholder={props.hint}
        />
        {clearButton}
      </InputWrapper>
      {cancelButton}
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
const Text = styled.Text`
  margin: 5px;
`;
const Input = styled.TextInput`
  font-size: 18px;
  margin-left: 10px;
  flex-shrink: 1;
  width: 100%;
`;

const InputWrapper = styled.View`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  flex: 7;
  flex-direction: row;
  background: blue;
`;
