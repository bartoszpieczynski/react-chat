import React, { Component } from "react";
import { withRouter } from "react-router";
import { auth, database } from "../../../firebase/firebase";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import classes from "./Register.css";

const INITIAL_STATE = {
   email: "",
   password: "",
   passwordRepeat: "",
   name: ""
};

class Register extends Component {
   state = {
      ...INITIAL_STATE
   };

   onSubmit = event => {
      event.preventDefault();
      auth
         .createUserWithEmailAndPassword(this.state.email, this.state.password)
         .then((authUser) => {
            database.ref('/users/' + authUser.user.uid).set({
               username: this.state.name,
               email: this.state.email,
               online: true
            })
         })
         .then(() => {
            auth.currentUser.updateProfile({ displayName: this.state.name });
            this.props.history.push("/chat");
         })
         .catch(error => {
            console.log(error);
         });
   };

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   };

   render() {

      const isValid = 
         this.state.password === this.state.passwordRepeat &&
         this.state.password !== '';


      return (
         <Modal open={true}>
            <div className={classes.formContainer}>
               <form className={classes.form} onSubmit={this.onSubmit}>
                  <Typography gutterBottom variant="title">Sign Up</Typography>
                  <TextField
                     type="text"
                     label="User name"
                     name='name'
                     value={this.state.name}
                     onChange={this.handleChange}
                     margin='normal'
                  />
                  <TextField
                     type="password"
                     label="Password"
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     margin='normal'
                  />
                  <TextField
                     type="password"
                     label="Repeat password"
                     name='passwordRepeat'
                     value={this.state.passwordRepeat}
                     onChange={this.handleChange}
                     margin='normal'
                  />
                  <TextField
                     type="email"
                     label="E-mail"
                     name='email'
                     value={this.state.email}
                     onChange={this.handleChange}
                     margin='normal'
                  />
                  <div className={classes.buttonContainer}>
                     <Button disabled={!isValid} type='submit'>Confirm</Button>
                     <Button>Cancel</Button>
                  </div>
               </form>
            </div>
         </Modal>
      );
   }
}

export default withRouter(Register);
