import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Chat from "../components/Chat/Chat";
import Login from "../components/UserAccountMenagment/Login/Login";
import Register from "../components/UserAccountMenagment/Register/Register";
import PasswordForget from "../components/UserAccountMenagment/PasswordMenagment/PasswordForget";
import Homepage from "../components/Home/Home";

import { Route, BrowserRouter } from "react-router-dom";
import withAuthentication from "../hoc/withAuthentication";

import classes from "./App.css";

// import firebase from 'firebase';
// import { storageKey, isAuthenticated } from '../firebase/firebase';

class App extends Component {


   // componentDidMount() {
   //    firebase.auth().onAuthStateChanged(authUser => {
   //       if (authUser){
   //          window.localStorage.setItem(storageKey, authUser.uid);
   //          this.setState({ uid: authUser.uid });
   //       } else {
   //          window.localStorage.removeItem(storageKey);
   //          this.setState({ uid: null });
   //       }
   //    })
   // }


   render() {
      return (
         <BrowserRouter>
            <div className={classes.App}>
               <Navigation
              />
               <Route exact path='/home' component={Homepage} />
               <Route exact path="/chat" component={Chat} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
               <Route exact path="/forgotpassword" component={PasswordForget} />
            </div>
         </BrowserRouter>
      );
   }
}

export default withAuthentication(App);
