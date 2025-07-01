// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1yFmfq50p1O_ZNNnqhxtE7uo0P8HcRdw",
  authDomain: "smmaudit-55e97.firebaseapp.com",
  projectId: "smmaudit-55e97",
  storageBucket: "smmaudit-55e97.appspot.com",
  messagingSenderId: "637886859945",
  appId: "1:637886859945:web:df2a4720acaea83fdbb7b8",
  measurementId: "G-T3CRWF51RF"
};

// Initialize Firebase
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

let analytics: Analytics | null = null;

// Only initialize Analytics on the client side
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
