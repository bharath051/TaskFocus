import { useState } from "react"

export default function TaskForm({addTask}) {
    const[task,setTask] =useState(''); 
    const[priority,setPriority] = useState('medium');
    const[categorie,setCategorie] = useState('general');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority ,categorie, completed : false})

        //reset
        setTask('');
        setPriority('medium');
        setCategorie('general');
    }
    return(
       <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name ="task" id ="task" placeholder="Enter the Task" value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Add Task</button>
            <h1>{task} {priority} {categorie}</h1>

            <div>
                <select name ="priority" id ="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <select name ="categorie" id ="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </div>
       </form>
    )
}