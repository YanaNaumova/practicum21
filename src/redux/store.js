import { configureStore } from "@reduxjs/toolkit";
import users from "./userSlice";

const store = configureStore({
  reducer: users,
});

export default store;
