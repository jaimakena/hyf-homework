import logo from './logo.svg';
import './App.css';

const list = [
  {title: "Get out of bed", timeline: "Wed Sep 13 2017"},
  {title: "Brush teeth", timeline: "Thu Sep 14 2017"},
  {title: "Eat breakfast", timeline: "Fri Sep 15 2017"},
  {title: "Play badminton", timeline: "Sat Sep 16 2017"}
]

function ToDo(props){
  return(
    <div>
      <li>{props.title}, {props.timeline}</li>
    </div>
  )
  }

function ToDoList(props){ 
  return(
    <div>
      <h1>Todo List</h1>
      <ul>
        {list.map(alist => <ToDo title={alist.title} timeline={alist.timeline}/>)}
      </ul>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
