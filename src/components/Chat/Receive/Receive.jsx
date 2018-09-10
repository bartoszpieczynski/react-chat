import React, { Component } from "react";
import Message from "./Message/Message";
import firebase from "firebase";

var config = {
   apiKey: "AIzaSyC0EFnRgwXBYtlt3RqfFSVey2as97kTvGY",
   databaseURL: "https://react-chat-8f8af.firebaseio.com/"
};
firebase.initializeApp(config);
const database = firebase.database();

class Receive extends Component {
   state = {
      messages: []
   };

   messageRef = database.ref("messages/");

   componentDidMount() {
      this.listenToMessages();
   }

   listenToMessages = () => {
      this.messageRef.on("value", message => {
         this.setState({
            messages: Object.values(message.val())
         });
      });
   };

   render() {
      console.log(this.state.messages);
      return (
         <div>
            {this.state.messages.map((msg, index) => {
               return <Message key={index} message={msg} />;
            })}
         </div>
      );
   }
}

export default Receive;
