export default function TaskForm() {
    return(
       <form action="">
        <div>
            <input type="text" name="" id="" placeholder="Enter the Task"/>
            <button type="submit">Add Task</button>

            <div>
                <select name="" id="">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <select name="" id="">
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </div>
       </form>
    )
}