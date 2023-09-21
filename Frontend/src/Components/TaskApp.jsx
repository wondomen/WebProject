import { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskDisplay from "./TaskDisplay";

// import { REACT_APP_API_URL } from '../utils/apiConfig';

//const apiUrl = `${'mongodb+srv://ghariamir97:Ag9776Hg0483@cluster0.i8yber4.mongodb.net/?retryWrites=true&w=majority'}/api/blogs`;

const apiUrl = `${'http://localhost:3001'}/api/createTask`;

const TaskApp = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date());
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, content, date };

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error in adding task");
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setDate("");
      // navigate('/');
      console.log('New task added:', json);
      alert("Task Added Successfully");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="create__task">
        <h2>Add a new task</h2>
        <form onSubmit={handleSubmit}>

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
            onChange={(e) => setContent(e.target.value)}>
          </textarea>

          <label>Date:</label>
          <DatePicker 
            dateFormat="dd/MM/yyyy, h:mm aa" 
            showTimeSelect
            selected={date} 
            closeOnScroll={true} 
            onChange={(date) => setDate(date)} />

          <button>Add Task</button>
        </form>

        <TaskDisplay />

      </div>
    </>
  )
}

export default TaskApp;
