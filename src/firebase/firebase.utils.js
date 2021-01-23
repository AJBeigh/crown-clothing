import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgpbJGvIBfQ5Ulz53WfNKAdfNHHPFP8Qc",
    authDomain: "crownndb.firebaseapp.com",
    projectId: "crownndb",
    storageBucket: "crownndb.appspot.com",
    messagingSenderId: "131925106321",
    appId: "1:131925106321:web:c42656d5f36dfe82dce930",
    measurementId: "G-1R026WBZYW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;