import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyCR724EP9rNkKtETG1xM_CGSQ1ZIHhbOhc",
    authDomain: "create-your-glow.firebaseapp.com",
    projectId: "create-your-glow",
    storageBucket: "create-your-glow.firebasestorage.app",
    messagingSenderId: "917183846981",
    appId: "1:917183846981:web:214a14dbefdbdcc017612c",
    measurementId: "G-65CL4G4DK7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
