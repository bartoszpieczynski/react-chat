import React from 'react';
import Receive from './Receive/Receive';
import Send from './Send/Send';
import classes from './Chat.css';


const chat = (props) => {
   return(
      <div className={classes.chat}>
         <Receive/>
         <Send />
      </div>
   );
}

export default chat;