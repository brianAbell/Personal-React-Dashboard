import { useState, useEffect } from 'react'; // useState hook from React. This hook is fundamental for adding state management to functional components in React.

function taskList() {
    const [tasks, setTasks] = useState([]); //new tasks state variable, setTasks to change value
    const [newTask, setNewTask] = useState(''); //to track the input field

    /* USE EFFECT PORTION ----- */
    //load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
     }, []);

     // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
     }, [tasks]);
     /* ----------------------- */

    //adds the value of newTask to the tasks array when a task is added:
    const addTask = () => {
        if(newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    //describes what the UI should look like for the component.
    return (
        <div>
            <h2>Task Tracker</h2>
            
            <div>
                <input
                    type = "text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="New task..." 
                />
                <button onClick={addTask}>Add</button>
            </div>

            {/* Displaying tasks here */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} 
                        {/* We can also add options to delete tasks here in future */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;  // To allow importing elsewhere