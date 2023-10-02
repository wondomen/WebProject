import React from "react";
import { useEffect, useState } from "react";
import { format, set } from "date-fns";
import { sortDataByDate } from "../../Utils/sortDataByDate";

import SortIcon from '@mui/icons-material/Sort';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddTask from "./AddTask";

const TaskDisplay = () => {
    const apiURL = "http://localhost:3000/api/getAllTasks";
    const [data, setData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const getTasks = async () => {
        const response = await fetch(apiURL);
        const jsonResponse = await response.json();

        sortDataByDate(jsonResponse);
        console.log(jsonResponse);

        setData(jsonResponse);
    }

    const deleteTask = async (id) => {
        const response = await fetch(`http://localhost:3000/api/deleteTaskById/${id}`, {
            method: "DELETE"
        });
        const jsonResponse = await response.json();
        if (!response.ok) {
            console.log("Error in deleting task");
        }
        if (response.ok) {
            console.log('Task deleted:', jsonResponse);
            alert("Task Deleted Successfully");
            window.location.reload();
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    const makeTaskList = () => {
        return (
            data.map((task) => {
                return (
                    <div className="task-overview-item" key={task._id} onClick={()=> setShowDetail(!showDetail)}>
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
        <>
            {/* <h2>Task Display</h2> */}
            <div className={"task-overview " + (!showDetail ? "show" : "hidden")}>
                <div className="task-overview-header">
                    <div className="sort-button">
                        <SortIcon />
                    </div>
                    
                    <div className="add-task-button" onClick={() => setToggleModal(true)}>
                        <AddCircleIcon />
                    </div>    
                </div>

                <hr/>
                
                <div className="task-overview-list">
                    {makeTaskList()}
                </div>
            </div>

            <div className={"task-detail " + (showDetail ? "show" : "hidden")}>
                <h2>Task Detail</h2>
            </div>

            {toggleModal && (
                <>
                    <div className="overlay" onClick={() => setToggleModal(false)}></div>
                    <AddTask />
                </>
            )}
        </>
    )
};

export default TaskDisplay;