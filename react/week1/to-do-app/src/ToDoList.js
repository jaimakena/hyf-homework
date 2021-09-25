import ToDo from './ToDo';

function ToDoList(props){ 
    return(
      <div>
        <h1>Todo List</h1>
        <ul>
          {props.list.map((item,index) => 
          <ToDo key={index} title={item.title} timeline={item.timeline}/>)}
        </ul>
      </div>
    )
  }

  export default ToDoList;