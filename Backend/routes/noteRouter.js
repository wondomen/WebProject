import express from 'express';
import noteController from '../controllers/noteController.js';

const noteRouter = express.Router();

noteRouter.post('/', noteController.createNote);
noteRouter.get('/', noteController.getAllNotes);
noteRouter.get('/:id', noteController.getNoteById);
noteRouter.put('/:id', noteController.updateNoteById);
noteRouter.delete('/:id', noteController.deleteNoteById);

export default noteRouter;