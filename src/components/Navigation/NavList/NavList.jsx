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


import { Link, withRouter } from "react-router-dom";

const navList = () => (
   <List>
      {/* {window.localStorage.getItem(storageKey) ? (
         <NavListAuth />
      ) : (
         <NavListNonAuth />
      )} */}
      <NavListAuth />
   </List>
);





const CoreNavList = () => (
   <Fragment>
      <ListItem button>
         <ListItemIcon>
            <Avatar></Avatar>
         </ListItemIcon>
         <ListItemText primary='Profile' />
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
            <ListItem button>
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



export default withRouter(navList);
