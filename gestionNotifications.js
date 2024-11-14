import { getMessaging, getToken, onMessage } from "firebase/messaging";

const messaging = getMessaging();

getToken(messaging, { vapidKey: "YOUR_PUBLIC_VAPID_KEY" })
  .then((currentToken) => {
    if (currentToken) {
      console.log("Token generated: ", currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Customize notification here
});
if (Notification.permission === "granted") {
  new Notification("Notifications are already enabled.");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Notifications enabled.");
    }
  });
}
function showNotification(title, body) {
  if (Notification.permission === "granted") {
    new Notification(title, { body });
  }
}

// Utilisation
showNotification(
  "Nouveau Post",
  "Un nouveau post a été ajouté à votre journal de bord."
);
