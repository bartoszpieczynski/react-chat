import React, { Fragment } from "react";

import {
   ListItem,
   ListItemIcon,
   ListItemText,
   List,
   Divider,
   Avatar
} from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import PeopleIcon from "@material-ui/icons/People";
import Exit from "@material-ui/icons/ExitToApp";

import { connect } from "react-redux";
import { storageKey } from "../../../firebase/firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

const navList = () => (
   <List>
      {window.localStorage.getItem(storageKey) ? (
         <NavListAuth />
      ) : (
         <NavListNonAuth />
      )}
   </List>
);

const LogOut = () => {
   firebase
      .auth()
      .signOut()
      .then(() => {
         window.localStorage.removeItem(storageKey);
      })
      .catch(error => {
         console.log(error);
      });
};

const CoreNavList = () => (
   <Fragment>
      <ListItem button>
         <ListItemIcon>
            <Avatar>TT</Avatar>
         </ListItemIcon>
         <ListItemText primary="Profile" />
      </ListItem>

      <Divider />

      <ListItem button>
         <ListItemIcon>
            <WeekendIcon />
         </ListItemIcon>
         <ListItemText primary="Chat rooms" />
      </ListItem>

      <ListItem button>
         <ListItemIcon>
            <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary="Users" />
      </ListItem>
   </Fragment>
);

const NavListAuth = () => {
   return (
      <Fragment>
         <CoreNavList />
         <Link to='/'>
            <ListItem onClick={() => LogOut()} button>
               <ListItemIcon>
                  <Exit />
               </ListItemIcon>
               <ListItemText primary="Log Out" />
            </ListItem>
         </Link>
      </Fragment>
   );
};

const NavListNonAuth = () => {
   return (
      <Fragment>
         <CoreNavList />
      </Fragment>
   );
};

const mapStateToProps = state => ({
   authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(navList);
