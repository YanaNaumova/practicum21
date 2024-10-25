import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editingUser(state, action) {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
  },
});

export const { addUser, deleteUser, editingUser } = userSlice.actions;
export default userSlice.reducer;
