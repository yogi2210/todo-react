import './App.css';
import {useState} from 'react'
import {Task} from './Task'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")
  
  

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  const addTask = ()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
     
      
    }
    setTodoList([...todoList, task])
   }

   const deleteTask = (id)=>{
      setTodoList(todoList.filter((task)=> task.id !== id))
   }

  

  return (
    <div className="App">
      <div className='header' >
        <div className="addTask">
          <input type="text" onChange={handleChange}  />
          <button onClick={addTask} >ADD TASK</button>
         </div>
      </div>
     <div className="list">
      {todoList.map((task)=>{
        return <Task taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask} /> 
      })}
     </div>
    </div>
  );
}

export default App;
