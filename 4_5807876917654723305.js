const firebaseConfig = {
  apiKey: "AIzaSyBVQZR4IWCkQNo2Y3W2_1ogN8MxUdIIPN8",
  authDomain: "swiftship-c8886.firebaseapp.com",
  databaseURL: "https://swiftship-c8886-default-rtdb.firebaseio.com",
  projectId: "swiftship-c8886",
  storageBucket: "swiftship-c8886.firebasestorage.app",
  messagingSenderId: "690417334077",
  appId: "1:690417334077:web:7f0367dceeec96dd80b754",
  measurementId: "G-F56J59G647"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-box").style.display = "none";
      document.getElementById("admin-panel").style.display = "block";
    })
    .catch(error => alert("Login failed: " + error.message));
}

function createDelivery() {
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const status = document.getElementById("status").value;
  const trackingId = Math.random().toString(36).substr(2, 9).toUpperCase();

  db.collection("deliveries").doc(trackingId).set({
    pickup, destination, status
  }).then(() => {
    document.getElementById("trackingResult").innerText =
      "Tracking Code: " + trackingId;
  }).catch(error => {
    console.error("Error adding document: ", error);
  });
}
