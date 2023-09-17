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