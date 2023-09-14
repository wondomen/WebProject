import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, ref: "note" }]
}, {
    collection: "user"
});

const User = mongoose.model("User", userSchema);

export { User };