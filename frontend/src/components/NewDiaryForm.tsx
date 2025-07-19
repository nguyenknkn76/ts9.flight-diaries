import diaryService from "../services/diary.service";
import type { Diary, NewDiary } from "../types/diary.type";

interface NewDiaryFormProps {
  newDiary: NewDiary,
  diaries: Diary[],
  setNewDiary: React.Dispatch<React.SetStateAction<NewDiary>>,
  setDiaries: React.Dispatch<React.SetStateAction<Diary[]>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const NewDiaryForm = ({newDiary, diaries, setNewDiary, setDiaries, setErrorMessage}: NewDiaryFormProps) => {
  const onCreateDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const diaryToAdd = newDiary;
    console.log(diaryToAdd);
    diaryService
      .create(diaryToAdd)
      .then(addedDiary => setDiaries(diaries.concat(addedDiary)))
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          const issueMessages = err.response.data.error
            .map((issue: { message: string }) => issue.message)
            .join(", ");
          setErrorMessage("can't create diary: " + issueMessages);
        } else {
          setErrorMessage("something went wrong");
        }
      });
  }
  return(
    <form onSubmit={onCreateDiary}>
      <div>
        <label>date: </label>
        <input
          type="date"
          value={newDiary.date}
          onChange={(e) => setNewDiary({ ...newDiary, date: e.target.value })}
        />
      </div>

      <div>
        <label>visibility: </label>
        <select
          value={newDiary.visibility}
          onChange={(e) => setNewDiary({ ...newDiary, visibility: e.target.value })}
        >
          <option value="">-- choose visibility --</option>
          <option value="great">great</option>
          <option value="good">good</option>
          <option value="ok">ok</option>
          <option value="poor">poor</option>
        </select>
      </div>

      <div>
        <label>weather: </label>
        <select
          value={newDiary.weather}
          onChange={(e) => setNewDiary({ ...newDiary, weather: e.target.value })}
        >
          <option value="">-- choose weather --</option>
          <option value="sunny">sunny</option>
          <option value="cloudy">cloudy</option>
          <option value="rainy">rainy</option>
          <option value="stormy">stormy</option>
          <option value="snowy">snowy</option>
          <option value="windy">windy</option>
        </select>
      </div>

      <div>
        <label>comment: </label>
        <input
          type="text"
          value={newDiary.comment}
          onChange={(e) => setNewDiary({ ...newDiary, comment: e.target.value })}
        />
      </div>

      <button type="submit">add</button>
    </form>
  )
}

export default NewDiaryForm
