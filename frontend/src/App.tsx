import { useEffect, useState } from "react";
import diaryService from "./services/diary.service";
import type { Diary, NewDiary } from "./types/diary.type";
import NewDiaryForm from "./components/NewDiaryForm";
import DiariesList from "./components/DiariesList";

const App = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [newDiary, setNewDiary] = useState<NewDiary>({
    date: '',
    visibility:'',
    weather:'',
    comment:'',
  });

  useEffect(()=> {
    const fetchDiaries = async () => {
      const rs = await diaryService.getAll()
      setDiaries(rs);
    }
    fetchDiaries();
  },[])

  return (
    <div>
      <DiariesList diaries={diaries} />
      <NewDiaryForm 
        diaries={diaries} 
        newDiary={newDiary} 
        setNewDiary={setNewDiary} 
        setDiaries={setDiaries}
        setErrorMessage={setErrorMsg}
      />
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

    </div>
  )
}

export default App;