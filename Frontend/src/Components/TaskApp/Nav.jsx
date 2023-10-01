import React from "react";
import {MdOutlineAddTask} from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const TaskNavigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="logo" onClick={() => navigate("/")}>
                <MdOutlineAddTask className="logo-icon" size={60}/>
            </div>

            <div className="profile">
                <p>Profile</p>
            </div>
        </>

    )
};

export default TaskNavigation;