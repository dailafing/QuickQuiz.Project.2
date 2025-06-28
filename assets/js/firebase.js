import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzbnw6Vp0_0yQgNCu-SbC9Ns_T6zaKp6M",
    authDomain: "quickquiz-431e9.firebaseapp.com",
    projectId: "quickquiz-431e9",
    storageBucket: "quickquiz-431e9.appspot.com",
    messagingSenderId: "471134212152",
    appId: "1:471134212152:web:89f380c4195b10279a16cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.logToFirebase = async function (message) {
try {
    
        await addDoc(collection(db, "logs"), {
            message: message,
            timestamp: serverTimestamp()
        });

        console.log("Logged to Firebase:", message);

    } catch (e) {

        console.error("Failed to log to Firebase:", e);

    }
};