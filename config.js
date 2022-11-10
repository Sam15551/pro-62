import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDuNoepJ2sK3ZhknHjR6aeBv45rAnAotFg",
  authDomain: "student-attendence-app-5ec42.firebaseapp.com",
  databaseURL: "https://student-attendence-app-5ec42-default-rtdb.firebaseio.com",
  projectId: "student-attendence-app-5ec42",
  storageBucket: "student-attendence-app-5ec42.appspot.com",
  messagingSenderId: "722521907283",
  appId: "1:722521907283:web:52716856f95070d6aaa6a6"
};

let app =   firebase.initializeApp(firebaseConfig);
export default app.database();