import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "react-native";
import styled from "styled-components";
import UserHeader from "../components/UserHeader";
import SegmentedControl from "../components/SegmentedControl";
import FriendsPins from "../components/FriendsPins";
import WorldPins from "../components/WorldPins";
import ViewPager from "@react-native-community/viewpager";
import useUserStore from "../store/UserStore";
import useRequests from "../api/useRequests";

const HomeScreen = props => {
  StatusBar.setBarStyle("dark-content", true);
  let viewPagerRef = useRef();

  const [selectedView, setSelectedView] = useState("friends");
  const [friendsPins, setFriendsPins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const { user } = useUserStore();
  const { updateUser, getFriendsPosts } = useRequests();

  console.log("loaded home");

  useEffect(() => {
    updateUser();
    refreshFriendsPins();
  }, []);

  function refreshFriendsPins() {
    setRefreshing(true);
    getFriendsPosts()
      .then(({ posts }) => {
        setFriendsPins(posts);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }
  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <UserHeader
        displayName={user.displayName}
        onClick={() => {
          props.navigation.navigate("Modal");
        }}
        onPost={() => {
          props.navigation.push("Post");
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
          } else {
            setSelectedView("friends");
          }
        }}
      >
        <View key="0">
          <FriendsPins
            refreshing={refreshing}
            onRefresh={refreshFriendsPins}
            data={friendsPins}
            navigateToFriends={() => {
              props.navigation.push("AddFriends", { arrow: "arrow_down" });
            }}
          />
        </View>
        <View key="1">
          <WorldPins key="1" />
        </View>
      </Pager>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.paddingTop};
`;

const Pager = styled(ViewPager)`
  flex: 1;
  width: 100%;
`;
