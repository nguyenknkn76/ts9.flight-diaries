// import diaryData from '../data/diaryentries.json';
import diaries from '../data/entries';
import { DiaryEntry, NewDiaryEntry, NonSensitiveEntry} from '../types';

//! WARN: using `as` for type assertion can be risky if the data does not match the expected type.
// const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; 
const getEntries = () : DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number) : DiaryEntry | undefined=> {
  const entry = diaries.find(d => d.id === id);
  return entry;
};

const generateEntryId = () : number => {
  return Math.max(...diaries.map(d => d.id)) + 1;
};

const addDiary = (entry : NewDiaryEntry) : DiaryEntry => {
  const newDiaryEntry : DiaryEntry = {
    id: generateEntryId(),
    ...entry,
  };
  
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
  findById
};
