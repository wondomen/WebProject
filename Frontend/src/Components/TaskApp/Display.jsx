import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, set } from "date-fns";
import { sortDataByDate } from "../../Utils/sortDataByDate";

import SortIcon from '@mui/icons-material/Sort';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import AddTask from "./AddTask";


const TaskDisplay = () => {
    const apiURL = "http://localhost:3000/api/getAllTasks";
    const [data, setData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [displayId, setDisplayId] = useState(null);

    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    const token = localStorage.getItem("token");

    const getTasks = async () => {
        if (!token || !isUserLoggedIn) {
            alert("Session expired. Please login again.");
            navigate("/Login");
        }

        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        sortDataByDate(jsonResponse);
        // console.log(jsonResponse);

        setData(jsonResponse);
    }

    const deleteTask = async (id) => {
        if (!token || !isUserLoggedIn) {
            alert("Session expired. Please login again.");
            navigate("/Login");
        }

        const response = await fetch(`http://localhost:3000/api/deleteTaskById/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
                
            }
        });

        const jsonResponse = await response.json();
        
        if (!response.ok) {
            console.log("Error in deleting task");
        }
        if (response.ok) {
            console.log('Task deleted:', jsonResponse);
            alert("Task Deleted Successfully");
            getTasks();
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    const handleShowDetail = (id) => {
        if (!showDetail) {
            setShowDetail(true);
            setDisplayId(id);
        }
        else if (showDetail && id === displayId) setShowDetail(false);
        
        else if (showDetail && id !== displayId) setDisplayId(id);     
    }

    const makeTaskList = () => {
        return (
            data.map((task) => {
                return (
                    <div className="task-overview-item" key={task._id} onClick={() => handleShowDetail(task._id)}>
                        <h3>{task.title}</h3>

                    </div>
                )   
            })
        )
    }

    const displayTaskDetail = () => {
        const taskDetail = data.find((task) => task._id === displayId);

        if (!taskDetail) {
            return (
                <div className="task-detail">
                    <h3>No Task Selected</h3>
                </div>
            )
        }
        else {
            return (
                <div className="task-detail">
                    <h3>Title: {taskDetail.title}</h3>
                    <p>Content: {taskDetail.content}</p>
                    <p>Date: {format(new Date(taskDetail.date), "dd/MM/yyyy, hh:mm aa")}</p>
                </div>
            )
        }
    }

    return (
        <>
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
                <div className="task-detail-header">
                    <div className="collapse-button" onClick={() => setShowDetail(false)}>
                        <ArrowForwardIosIcon />
                    </div>

                    <div className="buttons-container">
                        <button className="btn changes-button">Save changes</button>
                        <button className="btn btn-danger delete-button" onClick={() => deleteTask(displayId)}>Delete</button>
                    </div>
                </div>

                <hr/>
                
                {displayTaskDetail()}
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