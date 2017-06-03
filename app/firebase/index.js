import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBsLy-rp8kgC0x1qvdxLlnT5rFiPw_pUdM",
    authDomain: "d33-todo-app.firebaseapp.com",
    databaseURL: "https://d33-todo-app.firebaseio.com",
    projectId: "d33-todo-app",
    storageBucket: "d33-todo-app.appspot.com",
    messagingSenderId: "255384504727"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
