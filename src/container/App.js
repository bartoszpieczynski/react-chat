import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import Receive from '../components/Chat/Receive/Receive';
// import Login from '../components/Login/Login';

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
            {/* <Login /> */}
            <Receive/>
         </div>
      );
   }
}

export default App;
