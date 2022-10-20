import * as firebase from 'firebase'
import '@firebase/firestore'

const Config = {
  apiKey: "AIzaSyAHL6SHUuEMCyNS60IkahhW8_cftFpIzkY",
  authDomain: "easy-house-rent-4352d.firebaseapp.com",
  projectId: "easy-house-rent-4352d",
  storageBucket: "easy-house-rent-4352d.appspot.com",
  messagingSenderId: "88301304031",
  appId: "1:88301304031:web:50ccf3119a0bced9a9116a"
};

firebase.initializeApp(Config);

export const db = firebase.firestore()