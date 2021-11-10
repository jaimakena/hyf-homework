import React, { useState } from 'react';
import Border from './Border';

function ToDo(props){
    const [enabled, setEnabled] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [validUpdatedDesc, setValidUpdatedDesc] = useState(true);
      const handleEdit = () => {
        setEditMode(true);
      }
      const handleUpdate = (id) => {
          const updatedDesc=document.getElementById('input'+id).value;
          if(updatedDesc.length>0){
            props.handleUpdate(id-1, updatedDesc);
            setEditMode(false);
          }else{
            setValidUpdatedDesc(false);
          }
      }

    return(
      <Border>
        <li>
        {editMode
        ?
        <input className={validUpdatedDesc ? "new" : "error"} 
          id={"input" + props.id } defaultValue={props.description} />
        :
        <label style={{ textDecorationLine: enabled ? 'line-through' : 'none'  }}>
        {props.description} | {props.deadline}
        </label>
        }
        <input
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(prevState => !prevState)} />
        <button onClick={() => props.handleDelete(props.id)}>
          Delete
        </button>
        {editMode
        ?<button onClick={() => handleUpdate(props.id)}>Update</button>
        :<button onClick={() => handleEdit()}>Edit</button>
        }
        </li>
      </Border>
    )
    }
 
export default ToDo;