import { Task } from "../models/taskModel.js";

const createTask = async (req, res) => {
    try {
        const data = await Task.create(req.body);
        console.log("Task data added");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in adding task data");
        console.log(error);
        res.status(400);
    }
};

const getAllTasks = async (req, res) => {
    try {
        const data = await Task.find({});
        console.log("Task data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in fetching task data");
        console.log(error);
        res.status(400);
    }
};

const getTaskById = async (req, res) => {
    try {
        const data = await Task.findById(req.params.id);
        console.log("Task data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in fetching task data");
        console.log(error);
        res.status(400);
    }
};

const updateTaskById = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;

        const index = Task.findIndex(c => c.id === id);

        if (index === -1) {
            return res.status(404).json({ message: "The task with the specified ID does not exist" });
        };

        Task[index].title = data.title;
        Task[index].date = data.date;
        Task[index].content = data.content;

        res.status(200).json(Task[index]);
    }
    catch (error) {
        console.log("Error occured in updating task data");
        console.log(error);
        res.status(400);
    }
};

const deleteTaskById = async (req, res) => {
    try {
        const data = await Task.findByIdAndDelete(req.params.id);
        console.log("Task data deleted");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in deleting task data");
        console.log(error);
        res.status(400);
    }
};

export default { 
    createTask, 
    getAllTasks, 
    getTaskById, 
    updateTaskById, 
    deleteTaskById 
};