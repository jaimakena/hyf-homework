import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
const DEFAULT_API_URL="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";


function ToDoList(){
  const [todos, setTodos] = useState([]);
  const addNewTodo = (newToDo) => {
    setTodos(todos.concat(newToDo));
  }
  const loadData = async () => {
    const res = await fetch(DEFAULT_API_URL);
    setTodos(await res.json());
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id-1, 1);
    setTodos(newTodos);
  }

  const handleUpdate = (id, text) => {
    const newTodos = [...todos];
    newTodos[id].description=text;
    setTodos(newTodos);
  }

    return(
      <div>
        <AddToDo addNewTodo={addNewTodo} todosLength={todos.length} />
        <ul>
        {todos.length>0
        ?
        todos.map((item,index) => 
          <ToDo key={index+1} id={index+1} description={item.description}
            deadline={item.deadline} handleDelete={handleDelete} 
            handleUpdate={handleUpdate}/>)
        :
        <label>No ToDo's</label>
        }
        </ul>
      </div>
    )
  }

  export default ToDoList;