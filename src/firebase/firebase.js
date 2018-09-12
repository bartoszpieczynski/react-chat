import firebase from 'firebase/app'
import 'firebase/auth';
import "firebase/database";

var config = {
   apiKey: "AIzaSyC0EFnRgwXBYtlt3RqfFSVey2as97kTvGY",
   authDomain: "react-chat-8f8af.firebaseapp.com",
   databaseURL: "https://react-chat-8f8af.firebaseio.com",
   projectId: "react-chat-8f8af",
   storageBucket: "react-chat-8f8af.appspot.com",
   messagingSenderId: "942969401297"
};

if (!firebase.apps.length) {
   firebase.initializeApp(config);
}


const auth = firebase.auth();
const database = firebase.database();

export {
   auth,
   database
}
