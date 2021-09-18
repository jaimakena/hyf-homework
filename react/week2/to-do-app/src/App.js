import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const todoList = [
  {id: 1,description: "Get out of bed"},
  {id: 2,description: "Brush teeth"},
  {id: 3,description: "Eat breakfast"},
];
let counter=todoList.length+1;

function App() {
  const onButtonClick = () => {
    let newToDo={};
    newToDo.id=counter++;
    newToDo.description='Random ToDo';
    setTodos(todos.concat(newToDo));
  }

  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id-1, 1);
    setTodos(newTodos);
  }

  const [todos, setTodos] = useState(todoList);
  return (
    <div className="App">
      <ToDoList list={todos} handleDelete={handleDelete}/>
      <button onClick={onButtonClick}>Add ToDo</button>
    </div>
  );
}

export default App;