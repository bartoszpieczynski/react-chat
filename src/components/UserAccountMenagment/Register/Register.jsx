import React, { Component } from "react";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import classes from "../Login/Login.css";
import firebase from 'firebase';
import { db } from '../../../firebase';
import { Link, withRouter } from 'react-router-dom';
// import { errorPrefix } from "@firebase/util";

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value
});

const INITIAL_STATE = {
   name: "",
   email: "",
   passwordOne: "",
   passwordTwo: "",
   error: null
};

class Register extends Component {
   state = {
      ...INITIAL_STATE
   };

   handleSubmit = event => {

      firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.passwordOne
         )
         .then(authUser => {
            db.doCreateUser(authUser.user.uid, this.state.name, this.state.email)
                  .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        this.props.history.push('/chat')
                  })
                  .catch(error => {
                        this.setState(byPropKey('error', error));
                  });
            })
            .catch(error => {
                  this.setState(byPropKey('error', error));
            })

         event.preventDefault();
   };

   render() {
      const { name, email, passwordOne, passwordTwo, error } = this.state;

      const isInvalid =
         passwordOne !== passwordTwo ||
         passwordOne === "" ||
         email === "" ||
         name === "";

      return (
         <Modal open={true}>
            <div className={classes.modal}>
               <Typography
                  variant="title"
                  align="center"
                  gutterBottom
                  className={classes.loginTitle}
               >
                  Sign Up
               </Typography>
               <form className={classes.form} onSubmit={this.handleSubmit}>
                  <TextField
                     id="name"
                     value={this.state.name}
                     label="Name"
                     onChange={event =>
                        this.setState(byPropKey("name", event.target.value))
                     }
                     margin="normal"
                  />
                  <TextField
                     id="password"
                     value={this.state.passwordOne}
                     label="Password"
                     onChange={event =>
                        this.setState(
                           byPropKey("passwordOne", event.target.value)
                        )
                     }
                     type="password"
                     margin="normal"
                  />
                  <TextField
                     id="password"
                     value={this.state.passwordTwo}
                     label="Password"
                     onChange={event =>
                        this.setState(
                           byPropKey("passwordTwo", event.target.value)
                        )
                     }
                     type="password"
                     margin="normal"
                  />
                  <TextField
                     id="email"
                     value={this.state.email}
                     label="E-mail"
                     onChange={event =>
                        this.setState(byPropKey("email", event.target.value))
                     }
                     type="email"
                     margin="normal"
                  />
                  <div className={classes.buttonContainer}>
                     <Button disabled={isInvalid} type="submit">
                        Confirm
                     </Button>
                     <Button><Link style={{textDecoration: 'none', color: 'black'}} to='/login'>Cancel</Link></Button>
                  </div>
                  {error && <p>{error.message}</p>}
               </form>
            </div>
         </Modal>
      );
   }
}

export default withRouter(Register);
