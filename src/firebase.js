import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDchtMDiz4qbWVnI8PqXm5LTjl73Y2FKHo",
  authDomain: "uploadimage-6f69e.firebaseapp.com",
  projectId: "uploadimage-6f69e",
  storageBucket: "uploadimage-6f69e.appspot.com",
  messagingSenderId: "648975809643",
  appId: "1:648975809643:web:07ac416d43dc532e83c52e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
