import React, { useEffect } from "react";
import AppNavigator from "./navigation/navigator";
import { firebaseConfig } from "./constants/apiKeys";
import * as firebase from "firebase";
import UserContext from "./context/UserContext";
import initUserStore from "./store/InitUserStore";
import useRequests from "./api/useRequests";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <UserContext.Provider value={initUserStore()}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
