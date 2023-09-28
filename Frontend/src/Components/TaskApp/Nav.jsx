import React from "react";
import {MdOutlineAddTask} from 'react-icons/md';

const TaskNavigation = () => {
    return (
        <>
            <div className="logo">
                <MdOutlineAddTask className="logo-icon" size={60}/>
            </div>

            <div className="profile">
                <p>Profile</p>
            </div>
        </>

    )
};

export default TaskNavigation;