import * as firebase from "firebase";
export function signin({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup({ email, password, displayName }) {
  let result = new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userInfo => {
        userInfo.user
          .updateProfile({ displayName: displayName.trim() })
          .then(() => {
            console.log("just set name in firebase");
            resolve();
          })
          .catch(error => {
            reject(error);
            console.log("error setting display name: ", error);
          });
      });
  });

  return result;
}

export function signout() {
  firebase.auth().signOut();
}

export function deleteAccount() {
  const user = firebase.auth().currentUser;
  return user.delete();
}

export function watchUserData(userStore) {
  const { user, setUser } = userStore;

  return firebase.auth().onAuthStateChanged(function(auth) {
    if (auth) {
      console.log(
        "AUTH CHANGE TRIGGERED setting user in watchUserData",
        auth.displayName
      );
      setUser({ ...user, displayName: auth.displayName });
    }
  });
}
