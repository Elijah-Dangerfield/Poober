import React from "react";
import styled from "styled-components";
import FindFriendsButton from "./FindFriendsButton";
import Friend from "./Friend";

const FriendsSection = props => {
  return (
    <Container>
      <SectionTitle>Friends</SectionTitle>

      <FindFriendsButton
        onClick={() => {
          props.onClickFind();
        }}
      />

      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

const SectionTitle = styled.Text`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 18px;
  color: grey;
  width: 100%;
`;
export default FriendsSection;
