import React from 'react';

function ToDo(props){
    return(
      <div>
        <li>
        {props.title}, {props.timeline}
        </li>
      </div>
    )
    }
 
export default ToDo;