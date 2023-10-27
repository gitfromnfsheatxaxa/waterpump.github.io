import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp( {
    apiKey: "AIzaSyDa_E15NWBIQzbDtflFhOHHeZEEnssa97c",
    authDomain: "asad-c7863.firebaseapp.com",
    projectId: "asad-c7863",
    storageBucket: "asad-c7863.appspot.com",
    messagingSenderId: "647675704162",
    appId: "1:647675704162:web:2eaebfeaf34c120897f23b",
    measurementId: "G-5LMT15W525"
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;