import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ArrowButton(props) {
  const getArrow = () => {
    if (props.type === "arrow_down") return "ios-arrow-down";
    if (props.type === "arrow_back") return "ios-arrow-back";
    if (props.type === "arrow_forward") return "ios-arrow-forward";
    return "ios-arrow-back";
  };
  return (
    <Container>
      <TouchableOpacity onPress={props.onClick}>
        <Ionicons
          name={getArrow()}
          size={props.size ? props.size : 38}
          color="grey"
        />
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View``;
