export const Task = (props)=>{
    return(
        <div 
        className='task-div' 
        style={{backgroundColor: props.completed ? "green" : "white"}}
        >
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)} >Done</button>
            <button onClick={() => props.deleteTask(props.id)} > X </button>
            
        </div>
    )
}