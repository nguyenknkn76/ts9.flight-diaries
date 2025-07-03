import express from 'express';
import * as dotenv from 'dotenv';
import diaryRouter from './routes/diaries';

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
  console.log('Received ping request');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
