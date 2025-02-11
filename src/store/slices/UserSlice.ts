import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  username: string;
  email: string;
  password: string;
};
type InitialState = { users: User[]; currentUser: User };

const initialState: InitialState = {
  users: [],
  currentUser: {
    username: "",
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload as User);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = { email: "", password: "", username: "" };
    },
  },
});

export const { createUser, setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
