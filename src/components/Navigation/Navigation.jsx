import React, { Fragment, Component } from "react";
import NavList from "./NavList/NavList";

import { Link } from 'react-router-dom';

import {
   AppBar,
   Toolbar,
   IconButton,
   Avatar,
   SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


class Navigation extends Component {

   state = {
      drawerOpened: false
   }

   toggleDrawer = () => {
      this.setState(prevState => {
         return { drawerOpened: !prevState.drawerOpened }
      })
   }

   render() {
      return (
         <Fragment>
            <AppBar position="static">
               <Toolbar>
                  <IconButton
                     onClick={this.toggleDrawer}
                     color="inherit"
                     aria-label="Menu"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Avatar>TT</Avatar>
               </Toolbar>
            </AppBar>
            <SwipeableDrawer
               open={this.state.drawerOpened}
               onOpen={this.toggleDrawer}
               onClose={this.toggleDrawer}
            >
               <NavList/>
            </SwipeableDrawer>
         </Fragment>
      );
   }
};

export default Navigation;
