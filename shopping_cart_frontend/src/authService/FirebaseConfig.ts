import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDhJWqKel3OlGnlC-PGrrdeF9l5Cbf5HCE",
  authDomain: "oscar-venturenix-project.firebaseapp.com",
  projectId: "oscar-venturenix-project",
  storageBucket: "oscar-venturenix-project.appspot.com",
  messagingSenderId: "286151794424",
  appId: "1:286151794424:web:616808f9d519b83111a50d",
  measurementId: "G-6635F5GS30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);