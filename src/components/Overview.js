import React from 'react'

export default function Overview(props){

    const {tasks} = props;
    const tasksList = tasks.map((task, index)=> {
        return <ul key={task.id}>
            <li key={task.id}> 
                <span> {index + 1} </span> 
                <span
                    contentEditable={ task.contentEditable ? true : false }
                    onInput={  (event) => props.handleEditTask(event.currentTarget.textContent, task.id)} 
                    suppressContentEditableWarning={true} >
                    {task.text}

                </span >
                <button type='button' onClick={()=>props.deleteTask(task.id)} > Delete </button>
                <button 
                    type='button' 
                    onClick={ task.contentEditable ? ()=>props.setEditContent(task.id) : ()=>props.handleUpdate(task.Id, 'text')} >
                    {task.contentEditable ? 'Submit' : 'Edit' } 
                </button>
            </li>

        </ul>
        
    });
    return (
        <div>
            {tasksList}
        </div>
        
    )
}