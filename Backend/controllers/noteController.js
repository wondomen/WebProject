import { Note } from "../models/noteModel.js";

const createNote = async (req, res) => {
    try {
        const data = await Note.create(req.body);
        console.log("Note data added");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in adding note data");
        console.log(error);
        res.status(400);
    }
};

const getAllNotes = async (req, res) => {
    try {
        const data = await Note.find({});
        console.log("Note data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in fetching note data");
        console.log(error);
        res.status(400);
    }
};

const getNoteById = async (req, res) => {
    try {
        const data = await Note.findById(req.params.id);
        console.log("Note data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in fetching note data");
        console.log(error);
        res.status(400);
    }
};

const updateNoteById = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;

        const index = Note.findIndex(c => c.id === id);

        if (index === -1) {
            return res.status(404).json({ message: "The note with the specified ID does not exist" });
        };

        Note[index].title = data.title;
        Note[index].date = data.date;
        Note[index].content = data.content;

        res.status(200).json(Note[index]);
    }
    catch (error) {
        console.log("Error occured in updating note data");
        console.log(error);
        res.status(400);
    }
};

const deleteNoteById = async (req, res) => {
    try {
        const data = await Note.findByIdAndDelete(req.params.id);
        console.log("Note data deleted");
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error occured in deleting note data");
        console.log(error);
        res.status(400);
    }
};

export default { 
    createNote, 
    getAllNotes, 
    getNoteById, 
    updateNoteById, 
    deleteNoteById 
};