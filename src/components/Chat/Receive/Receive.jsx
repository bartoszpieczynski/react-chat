import React, { Component } from "react";
import Message from "./Message/Message";
import classes from './Receive.css'

import { database } from '../../../firebase/firebase';

class Receive extends Component {
   state = {
      messages: {}
   };

   messageRef = database.ref().child("messages");

   componentDidMount() {
      this.listenToMessages();
   }
   
   componentWillUpdate() {
      let window = document.getElementById('receive-window');
      window.scrollTop = window.scrollHeight;
   }

   listenToMessages = () => {
      this.messageRef.limitToLast(10).on("value", message => {
         this.setState({
            messages: message.val()
         });
      });
   };

   render() {
      let message = Object.keys(this.state.messages)
            .map((msg) => {
            return [...Array(this.state.messages[msg])].map((message, index) => {
               return <Message key={index} message={message.text} author={message.name}/>
            })
      })
      return (
         <div id='receive-window' className={classes.receiveWindow}>
            {message}
         </div>
      );
   }
}

export default Receive;
