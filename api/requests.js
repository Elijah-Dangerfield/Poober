import * as firebase from "firebase";
import "firebase/firestore";

function dbReference() {
  console.log(firebase.auth().currentUser.uid);
  return firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);
}
export function signin({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function test() {
  let db = firebase
    .firestore()
    .collection("users")
    .doc("test");

  let userData = {
    test: "this thing"
  };
  db.set(userData)
    .then(() => {
      console.log("doneregistering");
    })
    .catch(e => {
      console.log("ERROR REGISTERING");
      console.log({ e });
    });
}

export function signup({ email, password, displayName }) {
  let result = new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userInfo => {
        let userData = {
          displayName: displayName
        };
        console.log("about to hit firebase");

        dbReference()
          .set(userData)
          .then(() => {
            console.log("doneregistering");
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
    dbReference()
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

export function getUser() {
  let result = new Promise((resolve, reject) => {
    dbReference()
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("no such docuemnt");
          reject("Unable to locate user record at this time");
        } else {
          console.log("got document data  \n", doc.data());
          resolve(doc.data());
        }
      })
      .catch(e => {
        reject(e);
      });
  });

  return result;
}
