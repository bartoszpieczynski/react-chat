import React from "react";
import { Modal, Typography, TextField, Button } from "@material-ui/core";

import classes from './Login.css';

const login = props => {
   return (
      <Modal open={true}>
         <div className={classes.modal}>
            <Typography variant="title" align="center" gutterBottom className={classes.loginTitle}>
               Sign In
            </Typography>
            <form className={classes.form}>
               <TextField id='name' label='Name' margin='normal'/>
               <TextField id='password' label='Password' type='password' margin='normal'/>
               <div className={classes.buttonContainer}>
               <Button>Log In</Button>
               <Button>No Account?</Button>
               </div>
            </form>
         </div>
      </Modal>
   );
};

export default login;
