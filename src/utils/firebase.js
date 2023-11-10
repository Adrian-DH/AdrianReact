import {  connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithCredential, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import { getDatabase, connectDatabaseEmulator, onValue, ref, update } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDtmwLqwYANvHlvcWxbjRIt2x4Qii9AmAk",
  authDomain: "adrianreact-f711a.firebaseapp.com",
  databaseURL: "https://adrianreact-f711a-default-rtdb.firebaseio.com",
  projectId: "adrianreact-f711a",
  storageBucket: "adrianreact-f711a.appspot.com",
  messagingSenderId: "792577290712",
  appId: "1:792577290712:web:38ccb20485d1aed60d02ad",
  measurementId: "G-DXHNS0C6ME"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const auth = getAuth(firebase);
export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};
const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

if (!globalThis.EMULATION && import.meta.env.MODE === 'development') {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

signInWithCredential(auth, GoogleAuthProvider.credential(
  '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
));

// set flag to avoid connecting twice, e.g., because of an editor hot-reload
globalThis.EMULATION = true;
}