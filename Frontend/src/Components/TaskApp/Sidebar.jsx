import { useState } from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {

    const items = [
        { key: 0, name: "Today", icon: <CalendarTodayIcon /> },
        { key: 1, name: "Coming", icon: <CalendarTodayIcon /> },
        { key: 2, name: "All", icon: <ListIcon />},
    ]

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-items">
                    <ul>
                        {items.map((item) => {
                            return (
                                <li className="item" key={item.key}>
                                    <p className="icon">{item.icon}</p>
                                    <p className="title">{item.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Sidebar;