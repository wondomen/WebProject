import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";


const createUser = async (req, res) => {
    try {
        const { username, password, firstname, lastname, email } = req.body;
        
        if (!username || !password || !firstname || !lastname || !email) {
          return res.status(400).json({ message: "Please fill in all required fields" });
          // throw new Error("Missing required fields in registering user"); 
        }
    
        const emailCheck = await User.findOne({ email });
    
        if (emailCheck) {
          return res.status(400).json({ message: "Email already exists" });
          // throw new Error("Email already exists");
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const data = {
            username: username,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            email: email,
        };
    
        const newUser = await User.create(data);
    
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
    
        const response = {
            _id: newUser._id,
            username: newUser.username,
            firstname: newUser.firstname,
            token: token,
        };
    
        res.status(201).json(response);
      } 
      catch (error) {
        console.log("Error occured in adding user data");
        console.log(error);
        res.status(400).json({ message: "Error occured in adding user data" });
      }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        if (!username || !password) {
          return res.status(400).json({ message: "Please fill in all required fields" });
          // throw new Error("Missing required fields in login"); 
        }
    
        const usernameCheck = await User.findOne({ username });
    
        if (!usernameCheck) {
          return res.status(400).json({ message: "Username does not exist" });
          // throw new Error("Email does not exist");
        }
    
        const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
    
        if (!passwordCheck) {
          return res.status(400).json({ message: "Password is incorrect" });
          // throw new Error("Password is incorrect");
        }
    
        const token = jwt.sign(
          { id: usernameCheck._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );

        const response = { 
            message: "User logged in", 
            username: usernameCheck.username,
            token: token 
        }
    
        res.status(200).json(response);    
      } 
      catch (error) {
        console.log("Error occured in adding user data");
        console.log(error);
        res.status(404).json({ message: "Error occured in adding user login" });
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
    loginUser,
    getAllUsers, 
    getUserById, 
    updateUserById, 
    deleteUserById 
};
