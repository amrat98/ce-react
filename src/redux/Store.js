import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./AuthSlice";
const store = configureStore({
  reducer: {
    auth: authReduce,
  },
});

export default store;
