// redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  _id: string | null;
  userName: string | null;
  email: string | null;
}

const initialState: UserState = {
  _id: null,
  userName: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserState>) {
      state._id = action.payload._id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
