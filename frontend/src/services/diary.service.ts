import axios from "axios";
import type { Diary, NewDiary } from "../types/diary.type";

const baseUrl = "/api/diaries";

// http://localhost:3000/api/diaries
const getAll = async () => {
  const res = await axios.get<Diary[]>(`${baseUrl}`)
  return res.data;
};

const create = async (obj: NewDiary) => {
  const res = await axios.post<Diary>(`${baseUrl}`, obj)
  return res.data;
}

export default {
  getAll,
  create
}