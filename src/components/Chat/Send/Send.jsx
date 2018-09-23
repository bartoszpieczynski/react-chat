import React, { Component } from "react";
import classes from "./Send.css";
import axios from "../../../axios";
import { Button } from '@material-ui/core';

import { auth } from '../../../firebase/firebase';


class Send extends Component {

   state = {
      message: {
         timestamp: null,
         name: null,
         text: null        
      }
   }


   componentDidMount() {
         auth.onAuthStateChanged((user) => {
            if(user) {
                  const state = {...this.state}
                  state.message.name = user.displayName
                  this.setState({...state})
            } else {
                  console.log('error')
            }
         })
   }


   handleChange = (event) => {
      let message = {...this.state.message};
      message.text = event.target.value;

      this.setState({message})
   }

   postMessage = () => {
      axios
      .post('/messages.json', this.state.message);
   }

   sendMessage = () => {
         let message = {...this.state.message};
         message.timestamp = Math.floor(Date.now() / 1000);
         this.setState({message}, () => {
            this.postMessage();
         })
         document.getElementById('text-window').value = '';
   }

   sendMessageEnter = (event) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         this.sendMessage();
      }
   }


   render() {

      let disabled = true;

      if (this.state.message.name) {
            disabled = false;
      }


      return(
         <div className={classes.sendSection}>
         <form className={classes.form}>
            <textarea className={classes.textWindow} id='text-window' onKeyPress={this.sendMessageEnter} onChange={this.handleChange}></textarea>
         </form>
            <Button variant='contained' disabled={disabled} color='primary' className={classes.sendMessageBtn} onClick={this.sendMessage}>Send</Button>
         </div>
      );
      
   }
}

export default Send;
