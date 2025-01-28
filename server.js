import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Firebase konfigurieren
const firebaseConfig = {
  apiKey: "AIzaSyAkf5iFMbUU3dqOqiNoktXrNUcOQQwLH5A",
  authDomain: "nr-1-41dcd.firebaseapp.com",
  databaseURL: "https://nr-1-41dcd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nr-1-41dcd",
  storageBucket: "nr-1-41dcd.firebasestorage.app",
  messagingSenderId: "666646311109",
  appId: "1:666646311109:web:68a4a2180a9172bed8c0ac",
  measurementId: "G-T4N8SD91K9"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Ergebnisse anzeigen
async function loadResults() {
  const snapshot = await get(ref(db, 'votes'));
  const results = snapshot.val() || {};
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = Object.entries(results)
    .map(([option, votes]) => `${option}: ${votes} Stimmen`)
    .join('<br>');
}

loadResults();

