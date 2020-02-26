import React, { useState } from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "../components/FriendsSection";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signout } from "../api/user";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import ColorButton from "../components/ColorButton";
import * as user from "../api/user";
import { Snackbar } from "react-native-paper";
import poopEmoji from "../assets/poop_emoji.png";
const mapStateToProps = state => {
  return {
    displayName: state.displayName,
    removeUserListener: state.removeUserListener
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
const AccountView = props => {
  StatusBar.setBarStyle("dark-content", true);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  const handleSignOut = () => {
    signout();
    props.navigation.navigate("Loading");
  };

  const handleDeleteAccountClick = () => {
    setDeleteLoading(true);

    user
      .deleteAccount()
      .then(() => {
        console.log("removed user listener");
        props.removeUserListener();

        setDeleteLoading(false);
        props.navigation.popToTop();
      })
      .catch(error => {
        setDeleteLoading(false);
        setSnackbar(error.message);
      });
  };

  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <ArrowWrapper>
        <ArrowButton
          onClick={() => {
            props.navigation.pop();
          }}
          type="arrow_down"
        />
        <TouchableOpacity onPress={handleSignOut}>
          <RedText>Sign Out</RedText>
        </TouchableOpacity>
      </ArrowWrapper>
      <Content>
        <ProfileWrapper>
          <ProfilePicture source={poopEmoji} />
          <Username>{props.displayName}</Username>
          <Text>313 total pins</Text>
        </ProfileWrapper>

        <FriendsSection
          onClickFind={() => {
            props.navigation.navigate("AddFriends", { arrow: "arrow_back" });
          }}
        />
      </Content>
      <Snackbar
        visible={snackbar.length > 0}
        duration={4000}
        onDismiss={() => {
          setSnackbar("");
        }}
      >
        {snackbar}
      </Snackbar>
      <DeleteAccountButtonWrapper>
        <ColorButton
          text="DELETE ACCOUNT"
          loading={deleteLoading}
          color="red"
          onClick={() => {
            handleDeleteAccountClick();
          }}
        />
      </DeleteAccountButtonWrapper>
    </Container>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountView);

const Content = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;
const Username = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

const DeleteAccountButtonWrapper = styled.View`
  position: absolute;
  bottom: 30px;
  width: 100%;
  align-items: center;
`;

const Container = styled.SafeAreaView`
  padding-top: ${props => props.paddingTop};
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const ArrowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;
const Text = styled.Text`
  color: grey;
`;
const RedText = styled.Text`
  color: red;
  font-weight: normal;
  font-size: 18px;
`;
const ProfilePicture = styled.Image`
  width: 62px;
  height: 62px;
  background: black;
  border-radius: 31px;
  margin-bottom: 10px;
`;
