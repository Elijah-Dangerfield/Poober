import React, { useState, useEffect, useReducer } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";
import { connect } from "react-redux";
import { setDisplayName, setRemoveUserListener } from "../redux/app_redux";
import * as user from "../api/user";
const mapStateToProps = state => {
  return {
    displayName: state.displayName,
    removeUserListener: state.removeUserListener
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDisplayName: name => {
      dispatch(setDisplayName(name));
    },
    setRemoveUserListener: func => {
      dispatch(setRemoveUserListener(func));
    }
  };
};

const HomeScreen = props => {
  const [selectedView, setSelectedView] = useState({
    current: "friends"
  });
  StatusBar.setBarStyle("dark-content", true);

  useEffect(() => {
    console.log("called watch user data from home screen");
    const removeUserListener = user.watchUserData(props.setDisplayName);
    props.setRemoveUserListener(removeUserListener);
  }, []);

  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <UserHeader
        displayName={props.displayName}
        onClick={() => {
          props.navigation.navigate("Modal");
        }}
      />
      <SegmentedControl
        selected="left"
        onClickRight={() => {
          setSelectedView({ current: "world" });
        }}
        onClickLeft={() => {
          setSelectedView({ current: "friends" });
        }}
      />
      {selectedView.current === "friends" ? <FriendsPins /> : <WorldPins />}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.paddingTop};
`;
