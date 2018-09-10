import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import classes from './Message.css';

const message = (props) => {
   return(
     <Paper className={classes.paper}>
        <Typography>{props.author}: {props.message}</Typography>
     </Paper>
   );
}

export default message; 