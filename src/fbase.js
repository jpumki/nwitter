import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfWyy6fnqFhyJyaQlG6_HNsJj5bsRRNcc",
  authDomain: "nwitter-bec83.firebaseapp.com",
  projectId: "nwitter-bec83",
  storageBucket: "nwitter-bec83.appspot.com",
  messagingSenderId: "70258276602",
  appId: "1:70258276602:web:bbd900ddfa6cf557947143",
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth()