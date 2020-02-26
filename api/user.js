import * as firebase from "firebase";
export function signin({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup({ email, password, displayName }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userInfo => {
      console.log("in sign up set firebase display name with ", {
        displayName
      });
      userInfo.user
        .updateProfile({ displayName: displayName.trim() })
        .catch(error => {
          console.log("error setting display name: ", error);
        });
    });
}

export function signout() {
  firebase.auth().signOut();
}

export function deleteAccount() {
  const user = firebase.auth().currentUser;

  return user.delete();
}

export function watchUserData(setDisplayName) {
  return firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("sent dispatch in user.js with username: ", user.displayName);
      setDisplayName(user.displayName);
    }
  });
}
