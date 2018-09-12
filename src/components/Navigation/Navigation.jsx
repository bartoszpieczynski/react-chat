import React, { Fragment } from "react";
import NavList from "./NavList/NavList";

import { Link } from 'react-router-dom';

import { withStyles } from "@material-ui/core/styles";
import {
   AppBar,
   Toolbar,
   IconButton,
   Avatar,
   SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const style = {
   toolBar: {
      display: "flex",
      justifyContent: "space-between"
   },
   avatar: {
      flexGrow: 0
   },
   list: {
      width: "35%"
   }
};

const navigation = props => {
   const { classes } = props;
   return (
      <Fragment>
         <AppBar position="static">
            <Toolbar className={classes.toolBar}>
               <IconButton
                  onClick={props.toggleDrawer}
                  color="inherit"
                  aria-label="Menu"
               >
                  <MenuIcon />
               </IconButton>
               <Avatar className={classes.avatar}>TT</Avatar>
            </Toolbar>
         </AppBar>
         <SwipeableDrawer
            open={props.drawer}
            onOpen={props.toggleDrawer}
            onClose={props.toggleDrawer}
         >
            <NavList className={classes.list} />
         </SwipeableDrawer>
      </Fragment>
   );
};

export default withStyles(style)(navigation);
