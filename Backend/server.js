import express from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


