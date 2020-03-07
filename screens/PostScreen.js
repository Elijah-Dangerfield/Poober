import React, { useState } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { appColor } from "../constants/colors";
import ColorButton from "../components/ColorButton";
import useRequests from "../api/useRequests";

const PostScreen = props => {
  StatusBar.setBarStyle("dark-content", true);

  const defaultRating = 5;
  const { submitPost } = useRequests();
  const [rating, setRating] = useState(defaultRating);
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);

  function onRate(rating) {
    setRating(rating);
  }

  function handleSubmit() {
    setLoading(true);
    const timeStamp = new Date().toUTCString();

    submitPost({ postText, rating, timeStamp })
      .then(() => {
        props.navigation.pop();
      })
      .catch(e => {})
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Container
      paddingTop={StatusBar.currentHeight ? StatusBar.currentHeight : 0}
    >
      <Header>
        <BackButton
          onPress={() => {
            // TODO: cancel any currently loading calls and such
            props.navigation.pop();
          }}
        >
          <Ionicons name="ios-close" size={48} color="black" />
        </BackButton>
      </Header>

      <Content>
        <Input
          blurOnSubmit={true}
          returnKeyType="done"
          multiline={true}
          autoFocus={true}
          value={postText}
          onChangeText={setPostText}
          placeholder="Share your experience"
        />
        <RatingContainer>
          <AirbnbRating
            onFinishRating={onRate}
            count={5}
            reviews={["Bad", "Bad but good", "Meh", "Good", "Fat"]}
            defaultRating={defaultRating}
            size={40}
          />
        </RatingContainer>
      </Content>
      <ButtonsWrapper>
        <ColorButton
          onClick={() => {
            handleSubmit();
          }}
          loading={loading}
          color={appColor}
          text="Drop"
        />
      </ButtonsWrapper>
    </Container>
  );
};
export default PostScreen;

const Input = styled.TextInput`
  font-size: 24px;
`;
const Content = styled.ScrollView`
  width: 100%;
  margin-top: 45px;
`;

const ButtonsWrapper = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: 35px;
  justify-content: space-between;
`;

const RatingContainer = styled.View`
  margin-top: 45px;
`;
const Container = styled.SafeAreaView`
  padding-top: ${props => props.paddingTop};
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const BackButton = styled.TouchableOpacity`
  position: absolute;
  width: 45px;
  height: 45px;
  left: 0px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
