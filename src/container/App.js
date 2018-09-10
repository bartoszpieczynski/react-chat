import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';

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
          
         <div className="App">
            <Navigation drawer={this.state.drawerToggled} toggleDrawer={this.toggleDrawer}/>
            <Chat />
         </div>
      );
   }
}

export default App;
