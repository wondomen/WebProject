import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { sortDataByDate } from "../Utils/sortDataByDate";
import "../Styles/TaskDisplay.css";

const TaskDisplay = () => {
    const apiURL = "http://localhost:3001/api/getAllTasks";
    const [data, setData] = useState([]);

    const getTasks = async () => {
        const response = await fetch(apiURL);
        const jsonResponse = await response.json();

        sortDataByDate(jsonResponse);
        console.log(jsonResponse);

        setData(jsonResponse);
    }

    const deleteTask = async (id) => {
        const response = await fetch(`http://localhost:3001/api/deleteTaskById/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jsonResponse = await response.json();
        if (!response.ok) {
            console.log("Error in deleting task");
        };
        if (response.ok) {
            console.log('Task deleted:', jsonResponse);
            alert("Task Deleted Successfully");
            window.location.reload();
        };
    }


    useEffect(() => {
        getTasks();
    }, [])

    const makeTaskList = () => {
        return (
            data.map((task) => {
                return (
                    <div className="task-list-item" key={task._id}>
                        <h3>Title: {task.title}</h3>
                        <p>Content: {task.content}</p>
                        <p>Date: {format(new Date(task.date), "dd/MM/yyyy, hh:mm aa")}</p>

                        <button className="btn btn-danger" onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                )   
            })
        )
    }

    return (
        <div className="task-display">
            <h2>Task List</h2>
            <div className="task-list">
                {makeTaskList()}
            </div>
        </div>
    )
}

export default TaskDisplay;