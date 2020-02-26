import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as firebase from "firebase";

//
// Initial State...
//

const initialState = {
  displayName: "",
  removeUserListener: () => {}
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setDisplayName":
      console.log("got setDisplayName in reducer with ", action.value);
      return { ...state, displayName: action.value };

    case "setRemoveUserListener":
      console.log("got setRemoveUserListener in reducer");
      return { ...state, setRemoveUserListener: action.value };

    default:
      return state;
  }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setDisplayName = name => {
  return {
    type: "setDisplayName",
    value: name
  };
};

const setRemoveUserListener = func => {
  return {
    type: "setRemoveUserListener",
    value: func
  };
};

export { setDisplayName, setRemoveUserListener };
