import { useState } from 'react'; // useState hook from React. This hook is fundamental for adding state management to functional components in React.

function taskList() {
    const [tasks, setTasks] = useState([]); //new tasks state variable, setTasks to change value
    const [newTask, setNewTask] = useState(''); //to track the input field

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
                    value={newTask.name}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="New task..." 
                />
                <button onClick={addTask}>Add</button>
            </div>

            {/* We'll display tasks here soon */}
        </div>
    );
}