import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LandingScreen from "../screens/LandingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../components/AccountView";
import AddFriendsScreen from "../components/AddFriends";

const Main = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { headerShown: false }
  },
  Landing: {
    screen: LandingScreen,
    navigationOptions: { headerShown: false }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: { headerShown: false }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { headerShown: false }
  }
});

const Modal = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: { headerShown: false }
  },
  AddFriends: {
    screen: AddFriendsScreen,
    navigationOptions: { headerShown: false }
  }
});

const Navigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: { headerShown: false }
    },
    Modal: {
      screen: Modal,
      navigationOptions: { headerShown: false }
    }
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(Navigator);
