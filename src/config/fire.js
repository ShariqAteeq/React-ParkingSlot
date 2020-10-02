import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDk9WkENusYvtOc3fXvDbYE6xI1Mux6vRI",
    authDomain: "react-parkingslot.firebaseapp.com",
    databaseURL: "https://react-parkingslot.firebaseio.com",
    projectId: "react-parkingslot",
    storageBucket: "react-parkingslot.appspot.com",
    messagingSenderId: "14224001192",
    appId: "1:14224001192:web:09d3cc5cec60572734da9d"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;