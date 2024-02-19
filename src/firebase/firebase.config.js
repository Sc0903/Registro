import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtxz_c94eFYv2Tx4YYHU1SIX2FGDQ4xjI",
  authDomain: "firework-61f8b.firebaseapp.com",
  projectId: "firework-61f8b",
  storageBucket: "firework-61f8b.appspot.com",
  messagingSenderId: "698072847622",
  appId: "1:698072847622:web:159e5137262bfca5a13a87"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
