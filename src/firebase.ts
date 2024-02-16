import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCKBzBlISNkXiKpHVJnwuRCDslmS33mRQ",
  authDomain: "nwitter-reload-38980.firebaseapp.com",
  projectId: "nwitter-reload-38980",
  storageBucket: "nwitter-reload-38980.appspot.com",
  messagingSenderId: "96893739282",
  appId: "1:96893739282:web:984d139fbb6739cc3c93cb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);