import express from 'express';
// import path from 'path';
import * as dotenv from 'dotenv';
import diaryRouter from './routes/diaries';
import { coopHeaders } from './middlewares/coopHeaders';
// import cors from 'cors';

const app = express();
dotenv.config();
app.use(coopHeaders);
app.use(express.json());
// app.use(cors());
app.use(express.static('dist'));

// app.get('*name', (_req, res) => {
//   res.sendFile(path.resolve('dist', 'index.html'));
// });


const PORT = process.env.PORT || 3000;

app.get('/ping', (_req, res) => {
  console.log('Received ping request');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
  console.log(`test url: http://localhost:3000`);
});
