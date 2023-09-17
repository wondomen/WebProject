import express from 'express';
import taskController from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/api/createTask', taskController.createTask);
taskRouter.get('/api/getAllTasks', taskController.getAllTasks);
taskRouter.get('/api/getTaskById/:id', taskController.getTaskById);
taskRouter.put('/api/updateTaskById/:id', taskController.updateTaskById);
taskRouter.delete('/api/deleteTaskById/:id', taskController.deleteTaskById);

export default taskRouter;