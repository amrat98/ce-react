import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./AuthSlice";
import UserSlice from "./UserSlice";
const store = configureStore({
  reducer: {
    auth: authReduce,
    user: UserSlice
  },
});

export default store;
