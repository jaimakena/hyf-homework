import React from 'react';
import './App.css';
import ToDoList from './ToDoList.js';

const todos = [
  {title: "Get out of bed", timeline: "Wed Sep 13 2017"},
  {title: "Brush teeth", timeline: "Thu Sep 14 2017"},
  {title: "Eat breakfast", timeline: "Fri Sep 15 2017"},
  {title: "Play badminton", timeline: "Sat Sep 16 2017"}
];

function App() {
  return (
    <div className="App">
      <ToDoList list={todos} />
    </div>
  );
}

export default App;