import React from 'react'
import Overview from './components/Overview';
import uniqid from 'uniqid';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const [task, setTask] = React.useState({
    id:0,
    text:'',
    contentEditable: true
  });



  function handleChange(event){
    setTask({
      id: uniqid(),
      text: event.target.value,
      contentEditable: true
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    setTasks((prev)=>{
      return [...prev, task]
    });
    setTask({id:uniqid(), text: ''})
  }

  function deleteTask(id){
    setTasks((prevTasks)=>prevTasks.filter((currentTask)=>currentTask.id !== id))
  }

  function makeItChange(id){
    setTasks((prevTasks) => prevTasks.map((task) => {
      if(task.id === id){
        return {
          ...task,
          contentEditable: !task.contentEditable
        }
      }
      return task;
    }));
  }

  function handleEditTask(newText, id){
    setTasks((prevTasks) => prevTasks.map((task) => {
      if(task.id === id){
        return {
          ...task,
          text: newText
        }
      }
      return task;
    }));
    console.table(tasks)
  }



  function handleUpdate(){  //this is going to switch contentEditAble state on/off
    console.log('updating');
  }



  return (
    <form className="App" onSubmit={handleSubmit}>
          <Overview 
            tasks={tasks} 
            deleteTask = {deleteTask} 
            setEditContent = {makeItChange}
            handleUpdate = {handleUpdate}
            handleEditTask = {handleEditTask}
            />
          <input type='text' value={task.text} onChange={handleChange} />
          <button>Submit</button>
    </form>
  );
}

export default App;