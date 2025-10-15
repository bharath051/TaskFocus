import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import './App.css'

function App() {
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}
export default App
