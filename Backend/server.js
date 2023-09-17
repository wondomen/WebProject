import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/userRouter.js';
import taskRouter from './routes/taskRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGO_URI;


app.use(express.json());

async function connectToMongoDB() {

    async function connectionHandler() {
        try {
            await mongoose.connect(URI);            
            return true;
        }
        catch (error) {
            console.error("Connection to DB failed");
            console.error(error);
            return false;
        };
    };

    const connectionResult = await connectionHandler();
    
    connectionResult? console.log("Connection to DB established"): process.exit(1);
}

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(userRouter);
app.use(taskRouter);
