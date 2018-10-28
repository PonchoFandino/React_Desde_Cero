
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAEBzvQTeeVZFY4mPM-4w0HpKMXKBH-Nfw",
  authDomain: "tareas-c76f4.firebaseapp.com",
  databaseURL: "https://tareas-c76f4.firebaseio.com",
  projectId: "tareas-c76f4",
  storageBucket: "tareas-c76f4.appspot.com",
  messagingSenderId: "756931521265"
  };
  firebase.initializeApp(config);

  const fDb = firebase.database();
  const fAuth = firebase.auth();
  const fProvider = new firebase.auth.GoogleAuthProvider();

  export { fAuth, fDb, fProvider };
