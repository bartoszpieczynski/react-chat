import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import firebase from "firebase";

const PasswordForgetPage = () => (
   <div>
      <h1>Recover Password</h1>
      <PasswordForgetForm />
   </div>
);

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value
});

const INITIAL_STATE = {
   email: "",
   error: null
};

class PasswordForgetForm extends Component {
   state = {
      ...INITIAL_STATE
   };

   onSubmit = event => {
      const { email } = this.state;

      firebase
         .auth()
         .sendPasswordResetEmail(email)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
         })
         .catch(error => {
            this.setState(byPropKey("error"), error);
         });

      event.preventDefault();
   };
   render() {
      const { email, error } = this.state;

      const isInvalid = email === "";

      return (
         <form onSubmit={this.onSubmit}>
            <TextField
               value={this.state.email}
               onChange={event =>
                  this.setState(byPropKey("email", event.target.value))
               }
               type="text"
               placeholder="Email Address"
            />
            <Button disabled={isInvalid} type="submit">
               Reset My Password
            </Button>
            {error && <p>{error.message}</p>}
         </form>
      );
   }
}


export default PasswordForgetPage;

export { PasswordForgetForm };
