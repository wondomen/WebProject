import React, { useState } from "react";
import {MdOutlineAddTask} from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const TaskNavigation = ({ callback }) => {
    const navigate = useNavigate();
    
    localStorage.setItem("user", "tester");

    const user = localStorage.getItem("user");

    return (
        <>
            <div className="logo" onClick={() => navigate("/")}>
                <MdOutlineAddTask className="logo-icon" size={60}/>
            </div>

            <div className="profile" onClick={() => callback(true)}>
                <p>{user}</p>
            </div>
        </>

    )
};

export default TaskNavigation;