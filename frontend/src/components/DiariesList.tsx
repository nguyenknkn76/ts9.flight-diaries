import type { Diary } from "../types/diary.type";

interface DiariesListProps {
  diaries: Diary[]
}
interface DiaryProps {
  diary: Diary
}

const Diary = (props: DiaryProps) => {
  const diary = props.diary;
  return(
    <>
      <strong>{diary.id}: {diary.date}</strong>
      <p>weather: {diary.weather} </p>
      <p>visibility: {diary.visibility} </p>
    </>
  )
}

const DiariesList = (props: DiariesListProps) => {
  return(
    <ul>
      {props.diaries.map(d => 
        <li key={d.id}>
          <Diary diary={d}/>
        </li>
      )}
    </ul>
  )
}

export default DiariesList;