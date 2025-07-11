export interface DiaryBase {
  date: string,
  weather: string,
  visibility: string
}
export interface Diary extends DiaryBase{
  id: number, 
}
export interface NewDiary extends DiaryBase{
  comment: string,
}