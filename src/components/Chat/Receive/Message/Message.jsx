import React from "react";
import { Paper, Typography } from "@material-ui/core";
import classes from "./Message.css";
import { auth } from '../../../../firebase/firebase';



const message = props => {

   const userName = auth.currentUser.displayName;
   
   return (
      <Paper
         className={userName === props.author ? classes.paperUser : classes.paper}
      >
         <Typography
            className={userName === props.author ? classes.messageTextUser : classes.messageText}
         >
            {props.author}: {props.message}
         </Typography>
      </Paper>
   );
};

export default message;
