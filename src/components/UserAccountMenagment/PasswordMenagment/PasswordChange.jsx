import React, { Component } from "react";
import firebase from "firebase";

import { Button, TextField } from '@material-ui/core';

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value
});

const INITIAL_STATE = {
   passwordOne: "",
   passwordTwo: "",
   error: null
};

class PasswordChangeForm extends Component {
   state = {
      ...INITIAL_STATE
   };

   onSubmit = event => {
      const { passwordOne } = this.state;

      firebase
         .auth()
         .currentUser.updatePassword(passwordOne)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
         })
         .catch(error => {
            this.setState(byPropKey("error", error));
         });

      event.preventDefault();
   };

   render() {
      const { passwordOne, passwordTwo, error } = this.state;

      const isInvalid =
         passwordOne !== passwordTwo ||
         passwordOne === "" ||
         passwordTwo === "";

      return (
         <form onSubmit={this.onSubmit}>
            <TextField
               value={passwordOne}
               onChange={event =>
                  this.setState(byPropKey("passwordOne", event.target.value))
               }
               type="password"
               placeholder="New Password"
            />
            <TextField
               value={passwordTwo}
               onChange={event =>
                  this.setState(byPropKey("passwordTwo", event.target.value))
               }
               type="password"
               placeholder="Confirm New Password"
            />
            <Button disabled={isInvalid} type="submit">
               Reset My Password
            </Button>

            {error && <p>{error.message}</p>}
         </form>
      );
   }
}

export default PasswordChangeForm;
