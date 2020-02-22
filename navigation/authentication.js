import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LandingScreen from "../screens/LandingScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";

const App = createStackNavigator({
  Landing: {
    screen: HomeScreen,
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

export default createAppContainer(App);
