
import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBLRZ3NCAmpwto3v18wqhr-vGliLxfYwGE",
    authDomain: "ckeg-display.firebaseapp.com",
    databaseURL: "https://ckeg-display.firebaseio.com",
    projectId: "ckeg-display",
    storageBucket: "ckeg-display.appspot.com",
    messagingSenderId: "404124002483"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}