import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Diaries endpoint is under construction');
});

router.post('/', (_req, res) => {
  res.send('saving diary entry: ');
});

export default router;