import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here

var firebaseConfig = {
    apiKey: "AIzaSyDJHss8d8fEm04dNF1e-i8Jf7u-1B_QzCw",
    authDomain: "vue-pwa-todoapp.firebaseapp.com",
    databaseURL: "https://vue-pwa-todoapp.firebaseio.com",
    projectId: "vue-pwa-todoapp",
    storageBucket: "vue-pwa-todoapp.appspot.com",
    messagingSenderId: "844471198816",
    appId: "1:844471198816:web:d4f8b26467990e4b130f05",
    measurementId: "G-XW7B1XL48W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}