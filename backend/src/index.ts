import express from 'express';
import * as dotenv from 'dotenv';
import diaryRouter from './routes/diaries';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
  console.log('Received ping request');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
  console.log(`test api: http://localhost:3000/api/diaries`);
});
