
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNoGuJ5BSNmqN72dq_KuqNV_QwHMKOGdE-wHak9E",
  authDomain: "swen325-assignment-2-30c63.firebaseapp.com",
  databaseURL: 'https://swen325-assignment-2-30c63.firebaseio.com',
  projectId: "swen325-assignment-2-30c63",
  storageBucket: "swen325-assignment-2-30c63.appspot.com",
  messagingSenderId: "407136983884",
  appId: "1:407136983884:android:b1a2fdc24d7a96d5668de9",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};