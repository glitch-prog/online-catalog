import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6PZPKZnqVCf9MK6j_2S8mgBbEgYOF8FM',
  authDomain: 'online-catalog-3440c.firebaseapp.com',
  projectId: 'online-catalog-3440c',
  storageBucket: 'online-catalog-3440c.appspot.com',
  messagingSenderId: '169341399620',
  appId: '1:169341399620:web:340fb515091c04e9488211',
  measurementId: 'G-FZ0TE2S794',
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
