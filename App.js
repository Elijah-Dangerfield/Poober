import React from "react";
import AppNavigator from "./navigation/navigator";
import { firebaseConfig } from "./constants/apiKeys";
import * as firebase from "firebase";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return <AppNavigator />;
}
