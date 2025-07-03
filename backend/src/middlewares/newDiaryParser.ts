import { NextFunction } from "express";
import { NewEntrySchema } from "../utils/toNewDiaryEntry";

export const newDiaryParser = (req: Request, _res: Response, next: NextFunction) => {
  try{
    NewEntrySchema.parse(req.body);
    next();
  } catch (error: unknown){
    next(error);
  }
};