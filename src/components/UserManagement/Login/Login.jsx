import React, { Component } from "react";
import { withRouter } from "react-router";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import { auth } from '../../../firebase/firebase';
import classes from "./Login.css";

const INITIAL_STATE = {
   email: "",
   password: ""
};

class Login extends Component {
   state = {
      ...INITIAL_STATE
   };

   onSubmit = (event) => {
      event.preventDefault();

      auth.signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(() => {
            this.setState({...INITIAL_STATE});
            this.props.history.push('/chat');
         })
         .catch((error) => {
            console.log(error);
         })

   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   };

   render() {
      const isValid = this.state.password !== "" && this.state.email !== "";

      return (
         <Modal 
            open={true}>
            <div className={classes.formContainer}>
               <form className={classes.form} onSubmit={this.onSubmit}>
                  <Typography gutterBottom variant="title">
                     Sign Up
                  </Typography>
                  <TextField
                     type="email"
                     label="E-mail"
                     name="email"
                     value={this.state.email}
                     onChange={this.handleChange}
                     margin="normal"
                  />
                  <TextField
                     type="password"
                     label="Password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                     margin="normal"
                  />
                  <div className={classes.buttonContainer}>
                     <Button disabled={!isValid} type="submit">
                        Confirm
                     </Button>
                     <Button>Cancel</Button>
                  </div>
               </form>
            </div>
         </Modal>
      );
   }
}

export default withRouter(Login);
