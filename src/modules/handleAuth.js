import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
  } from "firebase/auth";


// Login to Firebase Authentication
const logIn = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {})
    .catch(error => {});
};

// Signup to Firebase Authentication
const signUp = (auth, email, password)=> {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {})
      .catch(error => {});
  };
  
// Google Provider
const googleLogin = auth => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export {logIn, signUp, googleLogin}