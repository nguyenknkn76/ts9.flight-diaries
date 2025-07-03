import { z } from  'zod';
import {NewEntrySchema} from './utils/toNewDiaryEntry';

// export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'windy';
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
  Snowy = 'snowy'
};

// export type Visibility = 'great' | 'good' | 'ok' | 'poor';
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

// export interface DiaryEntry {
//   id: number;
//   date: string;
//   weather: Weather;
//   visibility: Visibility;
//   comment?: string; // set this to optional by using '?'
// }
// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
export type NonSensitiveEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = z.infer<typeof NewEntrySchema>;

export interface DiaryEntry extends NewDiaryEntry {
  id: number;
}
