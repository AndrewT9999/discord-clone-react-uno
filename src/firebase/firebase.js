import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/performance";
const firebaseConfig = {
  apiKey: "AIzaSyAHrmAC-NpDuhRWUNbP6_MObQBCNdTohCE",
  authDomain: "testing-discord-clone.firebaseapp.com",
  projectId: "testing-discord-clone",
  storageBucket: "testing-discord-clone.appspot.com",
  messagingSenderId: "920620043138",
  appId: "1:920620043138:web:5c10d2e99ac1a0dc175d9b",
  measurementId: "G-XW72N56RL1"
};
  firebase.initializeApp(firebaseConfig);
  export const firestore=firebase.firestore();
  export default firebase;
  export const auth=firebase.auth();
  export const storage=firebase.storage();
  export const perf = firebase.performance();
  export const db=firebase.database();
  export const Googleprovider=new firebase.auth.GoogleAuthProvider();
  // const signinWithGithub=()=>{
//   const provider=new firebase.auth.GithubAuthProvider();
//   auth.signInWithPopup(provider).catch(alert);
// }
  export const CreateUserProfileDocument=()=>{
    const userRef=firestore.collection('users').doc(auth.currentUser.uid);
    userRef.set({
      username:auth.currentUser.displayName,
      useremail:auth.currentUser.email,
      userphoto:auth.currentUser.photoURL,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      roles:{}
    },{merge:true})
  }
