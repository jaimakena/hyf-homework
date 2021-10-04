import React, { useState } from 'react';

function ToDo({id, description, handleDelete}){
    const [enabled, setEnabled] = useState(false);
    return(
      <div>
        <li><label style={{ textDecorationLine: enabled ? 'line-through' : 'none'  }}>
            {description}
        </label>
        <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(prevState => !prevState)} />
        <button onClick={() => handleDelete(id)}>
          Delete
        </button>
        </li>
      </div>
    )
    }
 
export default ToDo;