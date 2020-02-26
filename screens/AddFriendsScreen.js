import React, { useState } from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import SearchView from "../components/SearchView";
import { StatusBar } from "react-native";

const AddFriends = props => {
  const [searchTerm, setSearchTerm] = useState("");
  StatusBar.setBarStyle("dark-content", true);

  const { arrow } = props.navigation.state.params;
  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <Header>
        <BackButton>
          <ArrowButton
            type={arrow ? arrow : "arrow_back"}
            onClick={() => {
              props.navigation.pop();
            }}
          />
        </BackButton>
        <Title>Add Friends</Title>
      </Header>
      <SearchView hint="Search for people" />

      <Content>
        <SectionTitle>Quick Add</SectionTitle>
      </Content>
    </Container>
  );
};
export default AddFriends;

const Content = styled.ScrollView`
  width: 100%;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;
const SectionTitle = styled.Text`
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: grey;
  width: 100%;
`;

const Container = styled.SafeAreaView`
  padding-top: ${props => props.paddingTop};
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const BackButton = styled.View`
  position: absolute;
  left: 15px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
