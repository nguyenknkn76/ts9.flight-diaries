import express, { NextFunction, Request, Response } from 'express';
import diaryService from '../services/diaryService';
import { NewEntrySchema } from '../utils/toNewDiaryEntry';
import z from 'zod';
// import { newDiaryParser } from '../middlewares/newDiaryParser';
import { DiaryEntry, NewDiaryEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
  // res.send('Diaries endpoint is under construction');
  // res.send([{data:'stuff'}]);
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));
  if (diary) res.send(diary);
  else res.sendStatus(404);
});

//! middleware
const newDiaryParser = (req: Request, _res: Response, next: NextFunction) => {
  try{
    NewEntrySchema.parse(req.body);
    next();
  } catch (error: unknown){
    console.log('something wrong');
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => { 
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

//todo CREATE NEW DIARY
router.post('/', newDiaryParser, (req: Request<unknown, unknown, NewDiaryEntry>, res: Response<DiaryEntry>) => {
  const addedEntry = diaryService.addDiary(req.body);
  res.json(addedEntry);
});

router.use(errorMiddleware);

// router.post('/', (req, res) => {
//   try {
//     // const newDiaryEntry = toNewDiaryEntry(req.body);
//     const newDiaryEntry = NewEntrySchema.parse(req.body);
//     const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);
//     res.json(addedDiaryEntry);
//   } catch (error: unknown) {
//     if(error instanceof z.ZodError) res.status(400).send({error: error.issues});
//     else res.status(400).send({error: 'unknown error'});
//   };
// });

export default router;