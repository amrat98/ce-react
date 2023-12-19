import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
import { authToken } from "./UserSlice";
export const LOGIN_EMAIL = "auth/loginByEmail";
export const LOGIN_PHONE = "auth/loginByPhone";
export const SIGNUP = "auth/signup";
export const FORGOT_PASSWORD = "auth/forgotPassword";
export const RESET_PASSWORD = "auth/resetPassword";
export const VERIFY_OTP = "auth/verifyOtp";
export const SEND_OTP = "auth/sendOtp";
export const signUpAsync = createAsyncThunk(SIGNUP, async (userData) => {
  const response = await axios.post(
    `${config.baseUrl}${config.endpoints.signUp}`,
    userData
  );
  return response.data;
});
export const loginEmailAsync = createAsyncThunk(
  LOGIN_EMAIL,
  async (userData) => {
    const response = await axios.post(
      `${config.baseUrl}${config.endpoints.login}`,
      userData
    );
    console.log(response);
    return response.data;
  }
);

export const loginPhoneAsync = createAsyncThunk(
  LOGIN_PHONE,
  async (userData) => {
    const response = await axios.post(
      `${config.baseUrl}${config.endpoints.login}`,
      userData
    );
    console.log(response);
    return response.data;
  }
);

export const resetPassAsync = createAsyncThunk(
  RESET_PASSWORD,
  async (userData) => {
    const response = await axios.post(
      `${config.baseUrl}${config.endpoints.resetPassword}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
          token: authToken, // Add any other headers as needed
        },
      }
    );
    return response.data;
  }
);

export const forgotPassAsync = createAsyncThunk(
  FORGOT_PASSWORD,
  async (userData) => {
    const response = await axios.post(
      `${config.baseUrl}${config.endpoints.forgotPassword}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
          token: authToken, // Add any other headers as needed
        },
      }
      // {
      //   token: authToken,
      // }
    );
    return response.data;
  }
);

export const verifyOtpAsync = createAsyncThunk(VERIFY_OTP, async (otp) => {
  const response = await axios.post(
    `${config.baseUrl}${config.endpoints.verifySignupOtp}`,
    otp
  );
  return response.data;
});

export const sendOtpAsync = createAsyncThunk(SEND_OTP, async (data) => {
  const response = await axios.post(
    `${config.baseUrl}${config.endpoints.sendOtp}`,
    data
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    signupStep: 1,
    status: "idle",
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        state.signupStep = 2;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(loginPhoneAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginPhoneAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(loginEmailAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginEmailAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(verifyOtpAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        state.signupStep = 1;
      })
      .addCase(verifyOtpAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(sendOtpAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(sendOtpAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
