import { NewDiaryEntry, Visibility, Weather } from "../types";

//! the parser for the fields of parameter `object: unknown`
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if(!comment || !isString(comment)) 
    throw new Error('Incorrect or missing comment');
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if(!date || !isString(date) || !isDate(date)) 
    throw new Error('Incorrect or missing date: ' + date);
  return date;
};

/* 
! WARN:
! when u use type of Weather like this
export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'windy';
! ur function isWeather will be like this → but it's sus → SHOULD use ENUM
const isWeather = (weather: string) => {
  const weathers = ['sunny', 'rainy', 'cloudy', 'stormy', 'snowy', 'windy'];
  return weathers.includes(weather);
};
*/

const isWeather = (param: string) : param is Weather => {
  return Object.values(Weather).map(v => v.toString()).includes(param);
};

const parseWeather = (weather: unknown): Weather => {
  if(!weather || !isString(weather) || !isWeather(weather)) 
    throw new Error('Incorrect or missing weather: ' + weather);
  return weather;
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility).map(v => v.toString()).includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if(!visibility || !isString(visibility) || !isVisibility(visibility)) 
    throw new Error('Incorrect or missing visibility: ' + visibility);
  return visibility;
};


/**
 * convert the `object` parameter to NewDiaryEntry
 * @param object : unkown
 * @returns NewDiaryEntry
 */
const toNewDiaryEntry = (object: unknown) : NewDiaryEntry => {
  if (!object || typeof object !== 'object') throw new Error('Incorrect or missing data object to create new diary entry');
  if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object){
    const newEntry : NewDiaryEntry = {
      comment: parseComment(object.comment),
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility)
    };
    return newEntry;
  };
  throw new Error('Incorrect data(to create new diary entry): some fields are missing');
};

//! NOTE: b/c using `in` ensure that fields are exist in Object so check !visibility, !weather should be removed

export default toNewDiaryEntry;