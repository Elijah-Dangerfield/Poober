import * as firebase from "firebase";
import "firebase/firestore";

function userReference() {
  console.log(firebase.auth().currentUser.uid);
  return firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);
}

function userPostsReference() {
  console.log(firebase.auth().currentUser.uid);
  return firebase
    .firestore()
    .collection("posts")
    .doc(firebase.auth().currentUser.uid);
}
export function signin({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup({ email, password, displayName }) {
  let result = new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(_ => {
        let userData = {
          displayName: displayName
        };
        userPostsReference().set({ posts: [] });
        userReference()
          .set(userData)
          .then(() => {
            resolve();
          })
          .catch(e => {
            console.log("ERROR REGISTERING");
            console.log({ e });
            reject(e);
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

export function submitPost(post) {
  let result = new Promise((resolve, reject) => {
    userPostsReference()
      .update({
        posts: firebase.firestore.FieldValue.arrayUnion(post)
      })
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });

  return result;
}

export function getFriendsPosts() {
  let result = new Promise((resolve, reject) => {
    userPostsReference()
      .get()
      .then(doc => {
        if (!doc.exists) {
          reject("Unable to locate user record at this time");
        } else {
          resolve(doc.data());
        }
      })
      .catch(e => {
        reject(e);
      });
  });

  return result;
}

export function getUser() {
  let result = new Promise((resolve, reject) => {
    userReference()
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("no such docuemnt");
          reject("Unable to locate user record at this time");
        } else {
          resolve(doc.data());
        }
      })
      .catch(e => {
        reject(e);
      });
  });

  return result;
}
