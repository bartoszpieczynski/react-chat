import firebase from 'firebase';


export const doCreateUser = (id, username, email) => 
   firebase.database().ref(`users/${id}`).set({
      username,
      email
   });

   export const onceGetUsers = () => {
      firebase.database().ref('users').once('value');
   }