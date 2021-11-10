import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddToDo({addNewTodo, todosLength}){ 
    const [validDesc, setValidDesc] = useState(true);
    const [validDate, setValidDate] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const inFuture = (date) => {
        const nowDate = new Date();
        nowDate.setHours(0,0,0,0);
        date.setHours(0,0,0,0);
        return date.getTime()>=nowDate.getTime();
      };
      const onAddToDo = () => {
        const newDescription=document.getElementById('newDescription').value;
        const newDeadLine=startDate.getFullYear()+'-'+(startDate.getMonth()+1)+'-'+startDate.getDate();
        const validDesc=(newDescription.length>0)?true:false;
        setValidDesc(validDesc);
        if(!inFuture(startDate)){
          setValidDate(false);
        } else if(validDesc){
            const newToDo={
                id: todosLength+1,
                description: newDescription,
                deadline:newDeadLine
              };          
          setValidDate(true);
          addNewTodo(newToDo);
        }
      }
    return(
        <table><tbody>
        <tr>
          <td><label>ToDo Description : </label></td>
          <td><input className={validDesc ? "new" : "error"} id="newDescription" /></td>
        </tr>
        <tr>
          <td><label>Deadline : </label></td>
          <td><DatePicker className={validDate ? "new" : "error"} dateFormat="yyyy/MM/dd"
      selected={startDate} onSelect={(date) => setStartDate(date)} /></td>
          <td><button variant="primary" onClick={onAddToDo}>Add ToDo</button></td>
        </tr>
      </tbody></table>
    )
  }

  export default AddToDo;