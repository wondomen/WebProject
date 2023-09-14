import { User } from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const data = await User.create(req.body);
        console.log("User data added");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in adding booking data");
        console.log(error);
        res.status(400);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find({});
        console.log("User data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in fetching booking data");
        console.log(error);
        res.status(400);
    }
};

const getUserById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        console.log("User data fetched");
        res.status(200).json(data);
    }
    catch {
        console.log("Error occured in fetching booking data");
        console.log(error);
        res.status(400);
    }
};

const updateUserById = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;

        const index = User.findIndex(c => c.id === id);

        if (index === -1) {
            return res.status(404).json({ message: "The user with the specified ID does not exist" });
        };

        User[index].email = data.email;

        res.status(200).json(User[index]);
    }
    catch {
        console.log("Error occured in updating booking data");
        console.log(error);
        res.status(400);
    }
};

const deleteUserById = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        console.log("User data deleted");
        res.status(200).json(data);
    }
    catch {
        console.log("Error occured in deleting booking data");
        console.log(error);
        res.status(400);
    }
};

export default { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUserById, 
    deleteUserById 
};
