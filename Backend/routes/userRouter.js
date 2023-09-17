import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/api/createUser', userController.createUser);
userRouter.get('/api/getAllUsers', userController.getAllUsers);
userRouter.get('/api/getUserById/:id', userController.getUserById);
userRouter.put('/api/updateUserById/:id', userController.updateUserById);
userRouter.delete('/api/deleteUserById/:id', userController.deleteUserById);

export default userRouter;