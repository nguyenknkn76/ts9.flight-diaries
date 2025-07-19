// import { NextFunction } from "express";
import { NewDiaryEntry, Visibility, Weather } from "../types";
import { z} from 'zod';

export const NewEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  date: z.string().date(),
  comment: z.string().optional(),
});

//! don't need → can be removed by using zod, interface ... extends ... in `types.ts` instead of this function
export const toNewDiaryEntry = (object: unknown) : NewDiaryEntry => {
  return NewEntrySchema.parse(object);
};

/**
 * convert the `object` parameter to NewDiaryEntry
 * @param object : unkown
 * @returns NewDiaryEntry
 */

// const toNewDiaryEntry = (object: unknown) : NewDiaryEntry => {
//   if (!object || typeof object !== 'object') throw new Error('Incorrect or missing data object to create new diary entry');
//   if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object){
//     const newEntry : NewDiaryEntry = {
//       comment: z.string().optional().parse(object.comment),
//       date: z.string().date().parse(object.date),
//       weather: z.nativeEnum(Weather).parse(object.weather),
//       visibility: z.nativeEnum(Visibility).parse(object.visibility),
//     };
//     return newEntry;
//   };
//   throw new Error('Incorrect data(to create new diary entry): some fields are missing');
// };

// export default {toNewDiaryEntry, newEntrySchema};