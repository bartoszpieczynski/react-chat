import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import classes from './App.css';

class App extends Component {

  state = {
    drawerToggled: false,
    logged: false 
  }

  toggleDrawer = () => {
    this.setState(prevState => {
       return { drawerToggled: !prevState.drawerToggled };
    });
 };

   render() {
      return (
          
         <div className={classes.App}>
            <Navigation drawer={this.state.drawerToggled} toggleDrawer={this.toggleDrawer}/>
            <Chat />
         </div>
      );
   }
}

export default App;
