import React from 'react';

const message = (props) => {
   return(
      <div>
         <h1>{props.author}</h1>
         <p>{props.message}</p>
      </div>
   );
}

export default message; 