import { useState } from 'react';

function taskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(''); //to track the input field

    const addTask = () => {
        if(newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };


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