import React from "react";

const UserContext = React.createContext({
  setUser: () => {},
  user: {
    displayName: "",
    friends: ""
  }
});

export default UserContext;
