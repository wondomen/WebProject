import express from 'express';
import taskController from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const taskRouter = express.Router();

taskRouter.post('/api/createTask', protect, taskController.createTask);
taskRouter.get('/api/getAllTasks', protect, taskController.getAllTasks);
taskRouter.get('/api/getTaskById/:id', protect, taskController.getTaskById);
taskRouter.get('/api/getTasksByUserId/:user', protect, taskController.getTasksByUserId);
taskRouter.put('/api/updateTaskById/:id', protect, taskController.updateTaskById);
taskRouter.delete('/api/deleteTaskById/:id', protect, taskController.deleteTaskById);

export default taskRouter;