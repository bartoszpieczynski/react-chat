import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
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
         </div>
      );
   }
}

export default App;
