import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { createTask } from '../../hooks/taskHook';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();

        const auth = new Boolean(localStorage.getItem("isAuth"));
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        const task = { user, title, content, date };

        // console.log(auth, token);

        const response = await createTask(task, token);
        const json = await response.json();

        if (!response.ok) {
            console.log("Error in adding task");
        }
        if (response.ok) {
            setTitle("");
            setContent("");
            setDate("");
            console.log('New task added:', json);
            alert("Task Added Successfully");
            window.location.reload();
        }
    }

    return ( 
        <div className="create-task-container">
            <h2>Add a new task</h2>
            <form className="task-form" onSubmit={handleSubmit}>

                <label>Task Title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>Task Content:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />

                <label>Task Date:</label>
                <DatePicker 
                    dateFormat="dd/MM/yyyy, h:mm aa" 
                    showTimeSelect
                    selected={date} 
                    closeOnScroll={true} 
                    onChange={(date) => setDate(date)} />

                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;