import React from "react";
import AppNavigator from "./navigation/navigator";
import { firebaseConfig } from "./constants/apiKeys";
import * as firebase from "firebase";
import { store } from "./redux/app_redux";
import { Provider } from "react-redux";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
