import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connectToMongoDB } from "./config/db.js";
import { PORT } from "./utils/config.js";

import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(userRouter);
app.use(taskRouter);
