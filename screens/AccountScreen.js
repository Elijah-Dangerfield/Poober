import React, { useState } from "react";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import FriendsSection from "../components/FriendsSection";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import ColorButton from "../components/ColorButton";
import { Snackbar } from "react-native-paper";
import poopEmoji from "../assets/poop_emoji.png";
import useUserStore from "../store/UserStore";
import useRequests from "../api/useRequests";

const AccountView = props => {
  StatusBar.setBarStyle("dark-content", true);
  const { user } = useUserStore();
  const { deleteAccount, signout } = useRequests();

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  const handleSignOut = () => {
    signout();
    props.navigation.navigate("Loading");
  };

  const handleDeleteAccountClick = () => {
    setDeleteLoading(true);

    deleteAccount()
      .then(() => {
        setDeleteLoading(false);
        props.navigation.navigate("Loading");
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
          <Username>{user.displayName}</Username>
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
export default AccountView;

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
