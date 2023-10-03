import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));

async function connectToMongoDB() {
  async function connectionHandler() {
    try {
      await mongoose.connect(URI);
      return true;
    } catch (error) {
      console.error("Connection to DB failed");
      console.error(error);
      return false;
    }
  }

  const connectionResult = await connectionHandler();

  connectionResult
    ? console.log("Connection to DB established")
    : process.exit(1);
}

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(userRouter);
app.use(taskRouter);
