// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmp2JvftbcfVUM-B6L8k6-L_jlTIGKvY",
  authDomain: "blog-62404.firebaseapp.com",
  projectId: "blog-62404",
  storageBucket: "blog-62404.appspot.com",
  messagingSenderId: "654963649364",
  appId: "1:654963649364:web:da45a18378769b9c3bb6c1",
  measurementId: "G-HHTGQ4NGRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore database
const db = getFirestore(app)
export default db;