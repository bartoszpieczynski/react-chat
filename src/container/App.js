import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Chat from "../components/Chat/Chat";
import Register from '../components/UserManagement/Register/Register';
import Login from '../components/UserManagement/Login/Login';
import Home from '../components/Home/Home';
import { auth, database } from '../firebase/firebase';


import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from '../hoc/PrivateRoute';

import classes from "./App.css";



class App extends Component {

   state = {
      authenticated: false,
   }

   componentDidMount() {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            this.setState({ authenticated: true });
            database.ref('/users/' + authUser.uid).update({
               online: true
            })
         } else {
            this.setState({authenticated: false});
            database.ref('/users/' + authUser.uid).update({
               online: false
            })
         }
      })
   }

   render() {

      return (
         <BrowserRouter>
            <div className={classes.App}>
               <Navigation />
               <Route exact path="/login"  component={Login} />
               <Route exact path="/register" component={Register} />
               <PrivateRoute exact path="/chat" authenticated={this.state.authenticated} component={Chat} />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
