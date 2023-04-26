import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZWbbZwd5_-_epqIoBA3RvaX8ukOBssNY",
  authDomain: "a-photo-tagging-app.firebaseapp.com",
  projectId: "a-photo-tagging-app",
  storageBucket: "a-photo-tagging-app.appspot.com",
  messagingSenderId: "722627539833",
  appId: "1:722627539833:web:9ff722cd5ef9d0660fb5a8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
