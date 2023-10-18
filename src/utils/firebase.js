

import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDtmwLqwYANvHlvcWxbjRIt2x4Qii9AmAk",
    authDomain: "adrianreact-f711a.firebaseapp.com",
    projectId: "adrianreact-f711a",
    storageBucket: "adrianreact-f711a.appspot.com",
    messagingSenderId: "792577290712",
    appId: "1:792577290712:web:38ccb20485d1aed60d02ad",
    measurementId: "G-DXHNS0C6ME"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

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