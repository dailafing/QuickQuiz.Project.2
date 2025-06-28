import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
    getFirestore,
    getDocs,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


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

document.getElementById('toggleLog').addEventListener('click', (e) => {
  e.preventDefault();
  const logBox = document.getElementById('logBox');
  const toggleText = document.getElementById('toggleLog');

  const isHidden = logBox.style.display === 'none';
  if (isHidden) {
    logBox.style.display = 'block';
    toggleText.textContent = 'Hide log ▲';
    loadLogsIntoBox(); // refresh when showing
  } else {
    logBox.style.display = 'none';
    toggleText.textContent = 'Show log ▼';
  }
});


async function loadLogsIntoBox() {
  const logBox = document.getElementById('logBox');
  logBox.innerHTML = 'Loading...';

  try {
    const q = query(collection(db, 'logs'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);

    let output = '';
    snapshot.forEach((doc) => {
      const data = doc.data();
      const ts = data.timestamp?.toDate?.().toLocaleString() || '(no time)';
      output += `[${ts}]<br>${data.message}<br><br>`;
    });

    logBox.innerHTML = output || '(no log entries found)';
  } catch (e) {
    logBox.innerHTML = 'Error loading logs: ' + e.message;
    console.error(e);
  }
}
