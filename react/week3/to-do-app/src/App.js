import React, { useEffect } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  useEffect(() => {
    let secCounter=0;
    setInterval(function(){
      secCounter+=1;
      document.getElementById('counter').innerHTML='You have used '+ secCounter +' seconds';
    }, 1000);
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <h2 id='counter'> </h2>
      <ToDoList/>
    </div>
  );
}

export default App;