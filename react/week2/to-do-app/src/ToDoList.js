import ToDo from './ToDo';

function ToDoList(props){ 
    return(
      <div>
        <h1>Todo List</h1>
        <ul>
          {props.list.map((item,index) => 
          <ToDo key={index} id={index} description={item.description}
            handleDelete={props.handleDelete}/>)}
        </ul>
      </div>
    )
  }

  export default ToDoList;