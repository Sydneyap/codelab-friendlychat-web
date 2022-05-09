/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDuU3Yrz-XhsSjgyDJkuzji-Io-Z9_OZE8",
  authDomain: "friendlychat-3ba4c.firebaseapp.com",
  projectId: "friendlychat-3ba4c",
  storageBucket: "friendlychat-3ba4c.appspot.com",
  messagingSenderId: "861746939352",
  appId: "1:861746939352:web:aac4ed26c6d9c13c921ead"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
