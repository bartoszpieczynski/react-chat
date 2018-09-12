import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Chat from "../components/Chat/Chat";
import Login from "../components/UserAccountMenagment/Login/Login";
import Register from "../components/UserAccountMenagment/Register/Register";

import { Route } from "react-router-dom";

import classes from "./App.css";

class App extends Component {
   state = {
      drawerToggled: false,
      logged: false
   };

   toggleDrawer = () => {
      this.setState(prevState => {
         return { drawerToggled: !prevState.drawerToggled };
      });
   };

   render() {
      return (
         <div className={classes.App}>
            <Navigation
               drawer={this.state.drawerToggled}
               toggleDrawer={this.toggleDrawer}
            />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
         </div>
      );
   }
}

export default App;
