import * as firebase from "firebase";

export function signin({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup({ email, password, displayName }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userInfo => {
      userInfo.user.updateProfile({ displayName: displayName.trim() });
    });
}

export function signout() {
  firebase.auth().signOut();
}
