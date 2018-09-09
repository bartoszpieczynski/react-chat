import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Modal, Typography, TextField } from "@material-ui/core";

const styles = {
   modal: {
      width: "70%",
      position: "absolute",
      top: "50%",
      left: "15%",
      backgroundColor: "white",
      borderRadius: 3,
      transform: 'translateY(-50%)'
   },
   title: {
      marginTop: 10
   },
   inputs:{
      margin: '0 auto'
   }
};

const login = props => {
   const { classes } = props;
   return (
      <Modal open={true}>
         <div className={classes.modal}>
            <Typography variant="title" align="center" gutterBottom className={classes.title}>
               Sign In
            </Typography>
            <form>
               <TextField id='name' label='Name' margin='normal' required/>
            </form>
         </div>
      </Modal>
   );
};

export default withStyles(styles)(login);
