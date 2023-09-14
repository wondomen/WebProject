import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    content: {type: String, required: true},
}, {
    collection: "note"
});

const Note = mongoose.model("Note", noteSchema);

export { Note };