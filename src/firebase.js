import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDBdsDD896lpdtiWa4R6XKK2VULZErqo9c",
    authDomain: "taskmanager-5d9f5.firebaseapp.com",
    databaseURL: "https://taskmanager-5d9f5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taskmanager-5d9f5",
    storageBucket: "taskmanager-5d9f5.appspot.com",
    messagingSenderId: "961520508536",
    appId: "1:961520508536:web:be9cee386b6deb2986578d"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();