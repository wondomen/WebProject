import express from 'express';
import taskController from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/', taskController.createTask);
taskRouter.get('/', taskController.getAllTasks);
taskRouter.get('/:id', taskController.getTaskById);
taskRouter.put('/:id', taskController.updateTaskById);
taskRouter.delete('/:id', taskController.deleteTaskById);

export default taskRouter;