import React from "react";
import AppNavigator from "./navigation/navigator";
import { firebaseConfig } from "./constants/apiKeys";
import * as firebase from "firebase";

export default function App() {
  firebase.initializeApp(firebaseConfig);
  return <AppNavigator />;
}
