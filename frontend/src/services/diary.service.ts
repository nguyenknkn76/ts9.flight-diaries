import axios from "axios";
import type { Diary, NewDiary } from "../types/diary.type";

const baseUrl = "http://localhost:3000/api";

// http://localhost:3000/api/diaries
const getAll = async () => {
  const res = await axios.get<Diary[]>(`${baseUrl}/diaries`)
  return res.data;
};

const create = async (obj: NewDiary) => {
  const res = await axios.post<Diary>(`${baseUrl}/diaries`, obj)
  return res.data;
}

export default {
  getAll,
  create
}