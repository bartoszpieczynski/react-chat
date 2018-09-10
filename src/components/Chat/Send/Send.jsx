import React, { Component } from "react";
import classes from "./Send.css";
import axios from "../../../axios";
import { Button } from '@material-ui/core';

class Send extends Component {

   state = {
      message: {
         timestamp: null,
         name: 'Bartek',
         text: 'test'        
      }
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
   }


   render() {
      return(
         <div style={{position: 'absolute', bottom: '0'}}>
         <form>
            <textarea onChange={this.handleChange}></textarea>
         </form>
            <Button onClick={this.sendMessage}>Send</Button>
         </div>
      );
      
   }
}

export default Send;
