import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ShadowPropTypesIOS } from "react-native";

export default function ArrowButton(props) {
  return (
    <Container>
      <TouchableOpacity onPress={props.onClick}>
        <Ionicons name="ios-arrow-back" size={38} color="grey" />
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View``;
