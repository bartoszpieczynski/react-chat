import React from 'react';
import Receive from './Receive/Receive';
import Send from './Send/Send';

const chat = (props) => {
   return(
      <div>
         <Receive/>
         <Send/>
      </div>
   );
}

export default chat;