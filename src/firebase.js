import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOTf_WNkRDrsRqts6xggezNxO6lb3Jat0",
    authDomain: "netflix-fe-clone.firebaseapp.com",
    projectId: "netflix-fe-clone",
    storageBucket: "netflix-fe-clone.appspot.com",
    messagingSenderId: "124711403188",
    appId: "1:124711403188:web:2005fcfeb79b4337b5a1e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;