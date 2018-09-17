import React, { Component } from "react";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import firebase from "firebase";
import { Link, withRouter } from "react-router-dom";
import { storageKey } from '../../../firebase/firebase';

import classes from "./Login.css";

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value
});

const INITIAL_STATE = {
   email: "",
   password: "",
   error: null
};

class Login extends Component {
   state = {
      ...INITIAL_STATE
   };

   handleSubmit = event => {
      event.preventDefault();
            firebase
               .auth()
               .signInWithEmailAndPassword(
                  this.state.email,
                  this.state.password
               )
               .then(authUser => {
                  window.localStorage.setItem(storageKey, authUser.uid);
                  this.setState({ ...INITIAL_STATE });
                  this.props.history.push("/chat");
               })
               .catch(error => {
                  this.setState(byPropKey("error", error));
               });
   };

   render() {
      const { email, password, error } = this.state;

      const isInvalid = password === "" || email === "";

      return (
         <Modal open={true}>
            <div className={classes.modal}>
               <Typography
                  variant="title"
                  align="center"
                  gutterBottom
                  className={classes.loginTitle}
               >
                  Sign In
               </Typography>
               <form className={classes.form} onSubmit={this.handleSubmit}>
                  <TextField
                     value={email}
                     id="email"
                     label="E-mail"
                     margin="normal"
                     onChange={event =>
                        this.setState(byPropKey("email", event.target.value))
                     }
                  />
                  <TextField
                     value={password}
                     id="password"
                     label="Password"
                     type="password"
                     margin="normal"
                     onChange={event =>
                        this.setState(byPropKey("password", event.target.value))
                     }
                  />
                  <div className={classes.buttonContainer}>
                     <Button disabled={isInvalid} type="submit">
                        Log In
                     </Button>
                     <Button>
                        <Link
                           style={{ textDecoration: "none", color: "black" }}
                           to="/register"
                        >
                           No Account?
                        </Link>
                     </Button>
                  </div>
                  <Button>
                     <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/forgotpassword"
                     >
                        Forgot Password?
                     </Link>
                  </Button>
                  {error && <p>{error.message}</p>}
               </form>
            </div>
         </Modal>
      );
   }
}

export default withRouter(Login);
