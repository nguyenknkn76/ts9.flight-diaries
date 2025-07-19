import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  uid: '',
  displayName: '',
  email: '',
  photoURL: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(_state, action: PayloadAction<UserState>) {
      return { ...action.payload, isLoggedIn: true };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout(_state) {
      return { ...initialState };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;