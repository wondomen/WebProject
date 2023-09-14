import { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";

// import { REACT_APP_API_URL } from '../utils/apiConfig';

const apiUrl = `${'mongodb+srv://ghariamir97:Ag9776Hg0483@cluster0.i8yber4.mongodb.net/?retryWrites=true&w=majority'}/api/blogs`;

const TaskApp = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const blog = { title, body, author };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        console.log("Error");
      }
      if (response.ok) {
        setTitle("");
        setBody("");
        setAuthor("");
        navigate('/');
        console.log('new blog added:', json)
      }
  
    }
  return (
    <>
        <div className="create">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task title:</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label>Task Content:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Date:</label>
                <input 
                type="Date" 
                required 
                value={title}
                onChange={(e) => setAuthor(e.target.value)} />
            <button><Link to="/">Add Task</Link></button>
        </form>
        </div>
    </>
  )
}

export default TaskApp;
