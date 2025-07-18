import { useEffect, useState } from "react";
import diaryService from "./services/diary.service";
import type { Diary, NewDiary } from "./types/diary.type";
import NewDiaryForm from "./components/NewDiaryForm";
import DiariesList from "./components/DiariesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import LoginPage from "./pages/LoginPage";
// import { handleLogin } from "./demos/login.demo";

const App = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [newDiary, setNewDiary] = useState<NewDiary>({
    date: '',
    visibility:'',
    weather:'',
    comment:'',
  });
  
  /*
    ! func tests
    console.log(import.meta.env);
    handleLogin();
  */

  useEffect(()=> {
    const fetchDiaries = async () => {
      const rs = await diaryService.getAll()
      setDiaries(rs);
    }
    fetchDiaries();
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
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
    </Router>
  )
}

export default App;