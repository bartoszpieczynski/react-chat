import React, { Component } from "react";
import Message from "./Message/Message";
import firebase from "firebase";
import classes from './Receive.css'

var config = {
   apiKey: "AIzaSyC0EFnRgwXBYtlt3RqfFSVey2as97kTvGY",
   databaseURL: "https://react-chat-8f8af.firebaseio.com/"
};
firebase.initializeApp(config);
const database = firebase.database();

class Receive extends Component {
   state = {
      messages: {}
   };

   messageRef = database.ref().child("messages");

   componentDidMount() {
      this.listenToMessages();
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
         <div className={classes.receiveWindow}>
            {message}
         </div>
      );
   }
}

export default Receive;
