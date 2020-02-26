import React, { useState, useLayoutEffect, useRef } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";
import { connect } from "react-redux";
import { setDisplayName, setRemoveUserListener } from "../redux/app_redux";
import * as user from "../api/user";
import ViewPager from "@react-native-community/viewpager";

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
  const [selectedView, setSelectedView] = useState("friends");
  StatusBar.setBarStyle("dark-content", true);
  let viewPagerRef = useRef();
  useLayoutEffect(() => {
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
        selected={selectedView}
        onClickRight={() => {
          setSelectedView("world");
          viewPagerRef.setPage(1);
        }}
        onClickLeft={() => {
          setSelectedView("friends");
          viewPagerRef.setPage(0);
        }}
      />
      <Pager
        ref={viewPager => {
          viewPagerRef = viewPager;
        }}
        initialPage={selectedView === "friends" ? 0 : 1}
        onPageSelected={e => {
          const position = e.nativeEvent.position;
          if (position == 1) {
            setSelectedView("world");
            console.log("switched to world");
          } else {
            setSelectedView("friends");
            console.log("switched to friends");
          }
        }}
      >
        <FriendsPins
          key="0"
          navigateToFriends={() => {
            props.navigation.push("AddFriends", { arrow: "arrow_down" });
          }}
        />
        <WorldPins key="1" />
      </Pager>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.paddingTop};
`;

const Pager = styled(ViewPager)`
  flex: 1;
  width: 100%;
`;
