// import diaryData from '../data/diaryentries.json';
import diaries from '../data/entries';
import { DiaryEntry } from '../types';

//! WARN: using `as` for type assertion can be risky if the data does not match the expected type.
// const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; 
const getEntries = () : DiaryEntry[] => {
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary
};
