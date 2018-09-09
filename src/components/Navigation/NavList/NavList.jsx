import React from "react";
import { ListItem, ListItemIcon, ListItemText, List, Divider, Avatar } from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import PeopleIcon from "@material-ui/icons/People";

const navList = props => {
   return (
      <List>

         <ListItem button>
            <ListItemIcon>
               <Avatar>TT</Avatar>
            </ListItemIcon>
            <ListItemText primary="Profile" />
         </ListItem>

         <Divider/>

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

      </List>
   );
};

export default navList;
