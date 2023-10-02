import React from "react";
import Nav from "./TaskApp/Nav";
import Sidebar from "./TaskApp/Sidebar";
import Display from "./TaskApp/Display";
import "../Styles/TaskApp.css";

const TaskAppDemo = () => {
    return (
        <>
            <div className="task-app">
                <div className="task-nav">
                    <Nav />
                </div>
                
                <div className="task-main">
                    <div className="task-sidebar">
                        <Sidebar />
                    </div>

                    <div className="task-display">
                        <Display />
                    </div>

                </div>
            </div>
            
            
        </>
    );
};

export default TaskAppDemo;