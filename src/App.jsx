import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask= (task) => {
    setTasks([...tasks,task]);
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}
export default App
