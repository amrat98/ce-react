import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";
export const userProfile = "user/get-user-profile";
export const userLoginHistory = "user/get-login-history";
export const getByUser = "user/get-by-user";
export const authToken = localStorage.getItem("token");
export const userProfileAsync = createAsyncThunk(userProfile, async (data) => {
  const response = await axios.get(
    `${config.baseUrl}${config.userEndPoints.getUserProfile}`,
    {
      headers: {
        "Content-Type": "application/json",
        token: authToken,
      },
    }
  );
  return response.data;
});

export const loginHistoryAsync = createAsyncThunk(
  userLoginHistory,
  async (data) => {
    const response = await axios.get(
      `${config.baseUrl}${config.userEndPoints.getLoginHistory}?pageNo=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          token: authToken,
        },
      }
    );
    return response.data;
  }
);

export const getUserAsync = createAsyncThunk(getByUser, async (data) => {
  const response = await axios.get(
    `${config.baseUrl}${config.userEndPoints.getByUser}?pageNo=${data}`,
    {
      headers: {
        "Content-Type": "application/json",
        token: authToken,
      },
    }
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    help: "user",
    loginHistory: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfileAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(userProfileAsync.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(loginHistoryAsync.fulfilled, (state, action) => {
        state.loginHistory = action.payload?.responseData[0]?.data;
        state.user = null;
        state.error = action.error;
      })
      .addCase(loginHistoryAsync.rejected, (state, action) => {
        state.user = null;
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;
