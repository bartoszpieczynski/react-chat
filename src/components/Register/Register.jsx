import React, { Component } from "react";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import classes from "../Login/Login.css";
import axios from "../../axios";

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value,
});

class Register extends Component {
   state = {
         name: "",
         email: "",
         passwordOne: "",
         passwordTwo: "",
         error: ""
   };

   handleSubmit = () => {
      axios.post("/accounts.json", this.state);
   };

   render() {
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
               <form className={classes.form}>
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
                     <Button onClick={this.handleSubmit}>Confirm</Button>
                     <Button>Cancel</Button>
                  </div>
               </form>
            </div>
         </Modal>
      );
   }
}

export default Register;
