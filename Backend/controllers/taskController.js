import { Task } from "../models/taskModel.js";
import { User } from "../models/userModel.js";

const createTask = async (req, res) => {
    try {
        const { title, date, content, user } = req.body;

        if (!title || !date || !content || !user) {
            return res.status(400).json({ message: "Please fill in all required fields" });
        }

        const { _id } = await User.findOne({ username: user });

        const task = {
            title: title,
            date: date,
            content: content,
            user_id: _id
        }
        const data = await Task.create(task);
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

const getTasksByUserId = async (req, res) => {
    try {
        const { _id } = await User.findOne({ username: req.params.user });

        console.log(_id);

        if (!_id) return res.status(404).json({ message: "The user does not exist" });

        const data = await Task.find({ user_id: _id });

        console.log(data);

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
    getTasksByUserId,
    updateTaskById, 
    deleteTaskById 
};