import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwDRuV6tdZO241Hv4SOxKGs7ExevGp7bQ',
  authDomain: 'debates-f093a.firebaseapp.com',
  projectId: 'debates-f093a',
  storageBucket: 'debates-f093a.appspot.com',
  messagingSenderId: '576746940928',
  appId: '1:576746940928:web:70e1d8e75ae9e0bb4b06e5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
