import firebase from "firebase";
import './auth';

var config = {
   apiKey: "AIzaSyC0EFnRgwXBYtlt3RqfFSVey2as97kTvGY",
   databaseURL: "https://react-chat-8f8af.firebaseio.com/",
   authDomain: "react-chat-8f8af.firebaseapp.com"
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
