const API="https://taskmanager-server-hj26.onrender.com";

export const createTask = async (task, token) => {
    const response = await fetch(`${API}/api/createTask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(task)
    });

    return response;
}

export const getTasks = async (token) => {
    const response = await fetch(`${API}/api/getAllTasks`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

export const deleteTask = async (id, token) => {
    const response = await fetch(`${API}/api/deleteTaskById/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
            
        }
    });

    return response;
}