import React, { useState } from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import SearchView from "../components/SearchView";
import { StatusBar } from "react-native";
import useRequests from "../api/useRequests";
import User from "../components/User";
import { FlatList } from "react-native";
import useUserStore from "../store/UserStore";

const state = {
  INITIAL: "initial",
  SEARCHING: "searching",
  SEARCHED: "searched"
};

const AddFriends = props => {
  StatusBar.setBarStyle("dark-content", true);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [userState, setUserState] = useState(state.INITIAL);

  const { searchForUser, submitFriendRequest } = useRequests();
  const { user } = useUserStore();
  const { arrow } = props.navigation.state.params;

  const onSearch = searchTerm => {
    setUserState(state.SEARCHED);
    setSearchTerm(searchTerm);
    searchForUser(searchTerm)
      .then(data => {
        setSearchResults(data);
      })
      .catch(e => console.log(e));
  };

  const initialView = () => (
    <Content>
      <SectionTitle>Quick Add</SectionTitle>
    </Content>
  );

  const searchingView = () => (
    <Content>
      <SectionTitle>Currently Searching</SectionTitle>
    </Content>
  );

  const searchedView = () => {
    const usersList = () => (
      <>
        <SectionTitle>Results for: "{searchTerm}"</SectionTitle>

        <FlatList
          style={{ width: "100%" }}
          data={searchResults}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <User
              isCurrentUser={item.id === user.uid}
              isFriend={user.friends[item.id] === undefined ? false : true}
              username={item.displayName}
              onRequestFriend={() => {
                return submitFriendRequest({
                  currentUser: user.uid,
                  newFriend: { id: item.id, displayName: item.displayName }
                });
              }}
            />
          )}
          keyExtractor={(_, index) => "key" + index}
        />
      </>
    );

    const emptyView = () => {
      return <SectionTitle>No results found</SectionTitle>;
    };
    return (
      <SearchViewContent>
        {searchResults && searchResults.length > 0 ? usersList() : emptyView()}
      </SearchViewContent>
    );
  };

  const renderContent = () => {
    let view;
    switch (userState) {
      case state.SEARCHED:
        view = searchedView();
        break;
      case state.SEARCHING:
        view = searchingView();
        break;
      case state.INITIAL:
        view = initialView();
        break;
    }
    return view;
  };
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
      <SearchView
        hint="Search for people"
        onStartTyping={() => {
          setUserState(state.SEARCHING);
        }}
        onClear={() => {
          if (userState != state.SEARCHING) {
            setUserState(state.INITIAL);
          }
        }}
        onCancel={() => {
          setUserState(state.INITIAL);
        }}
        onSearch={onSearch}
      />

      {renderContent()}
    </Container>
  );
};
export default AddFriends;

const Content = styled.ScrollView`
  width: 100%;
`;

const SearchViewContent = styled.View`
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
