import React, { Component } from "react";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import firebase from "firebase";
import { Link, withRouter } from "react-router-dom";

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
      firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push("/chat");
         })
         .catch(error => {
            this.setState(byPropKey("error", error));
         });

      event.preventDefault();
   };

   render() {
      const { email, password, error } = this.state;

      const isInvalid =
      password === '' ||
      email === '';

      return (
         <Modal open={true}>
            <form className={classes.modal} onSubmit={this.handleSubmit}>
               <Typography
                  variant="title"
                  align="center"
                  gutterBottom
                  className={classes.loginTitle}
               >
                  Sign In
               </Typography>
               <form className={classes.form}>
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
                     <Button disabled={isInvalid} type='submit'>Log In</Button>
                     <Button>
                        <Link
                           style={{ textDecoration: "none", color: "black" }}
                           to="/register"
                        >
                           No Account?
                        </Link>
                     </Button>
                  </div>
                  {error && <p>{error.message}</p>}
               </form>
            </form>
         </Modal>
      );
   }
}

export default withRouter(Login);
