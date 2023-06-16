import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCxgF9ydxxY4j3BwrpJf5NFqzUN61ii6Es",
    authDomain: "worthy-shopping-12e57.firebaseapp.com",
    projectId: "worthy-shopping-12e57",
    storageBucket: "worthy-shopping-12e57.appspot.com",
    messagingSenderId: "59484658265",
    appId: "1:59484658265:web:47df18a80139ae85bb6f48",
    measurementId: "G-RMKGP3KBWL"
  }
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export default firebase;