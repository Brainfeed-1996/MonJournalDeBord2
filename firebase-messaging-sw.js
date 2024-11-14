importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyB9pAi316x5yx3Eu1XeqopbGbue5IxwIxQ",
  authDomain: "journaldebord.firebaseapp.com",
  projectId: "journaldebord",
  storageBucket: "journaldebord.firebasestorage.app",
  messagingSenderId: "128327797694",
  appId: "1:128327797694:web:db75f946a38c85d983c7ef",
  measurementId: "G-GB3CMMNW1T",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
