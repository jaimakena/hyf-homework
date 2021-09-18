import React, { useState } from 'react';

function ToDo(props){
    const [enabled, setEnabled] = useState(false);
    const handleChange = (id) => {
        setEnabled(prevState => !prevState);
        const style=enabled?'none':'line-through';
        const labelElement=document.getElementById('label'+id);
        if(labelElement){
            labelElement.style.textDecorationLine=style;
        }
      }

    return(
      <div>
        <li><label id={"label" + props.id} style={{ textDecorationLine: 'none' }}>
            {props.description}
        </label>
        <input
            type="checkbox"
            checked={enabled}
            onChange={() => handleChange(props.id)} />
        <button onClick={() => props.handleDelete(props.id)}>
          Delete
        </button>
        </li>
      </div>
    )
    }
 
export default ToDo;