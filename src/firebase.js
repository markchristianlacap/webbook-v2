import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC5w9xDZgNVw1bcX__4qW95YeaV732nZis",
  authDomain: "webbook-b3670.firebaseapp.com",
  databaseURL: "https://webbook-b3670.firebaseio.com",
  projectId: "webbook-b3670",
  storageBucket: "webbook-b3670.appspot.com",
  messagingSenderId: "873666792494",
  appId: "1:873666792494:web:223c30567db9d543"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
