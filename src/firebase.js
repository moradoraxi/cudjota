import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDg1mChE9wmAcLk7HBDmLjKk2TZp5V9Cpc",
    authDomain: "crud-tasks-7ef2e.firebaseapp.com",
    projectId: "crud-tasks-7ef2e",
    storageBucket: "crud-tasks-7ef2e.appspot.com",
    messagingSenderId: "283694168393",
    appId: "1:283694168393:web:f68cf7c71c4f23bc39c298"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)