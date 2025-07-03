export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'windy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string; // set this to optional by using '?'
}