import React, { useState } from 'react';
import ToDo from './ToDo';

const todoList = [
  {id: 1,description: "Get out of bed"},
  {id: 2,description: "Brush teeth"},
  {id: 3,description: "Eat breakfast"},
];
let counter=todoList.length+1;

function ToDoList(){ 
  const [todos, setTodos] = useState(todoList);
  const onButtonClick = () => {
    const newToDo={
      id: counter++,
      description: 'Random ToDo'
    };
    console.log(newToDo);
    setTodos(todos.concat(newToDo));
  }

  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id-1, 1);
    setTodos(newTodos);
  }
    return(
      <div>
        <h1>Todo List</h1>
        <p><button onClick={onButtonClick}>Add ToDo</button></p>
        <ul>
          {todos.map((item,index) => 
          <ToDo key={index+1} id={index+1} description={item.description}
            handleDelete={handleDelete}/>)}
        </ul>
      </div>
    )
  }

  export default ToDoList;