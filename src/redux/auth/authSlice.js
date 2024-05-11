import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from "./authOperation";

const initialState = {
  user: "",
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.name;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.name;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload.name;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = "";
        state.token = "";
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOutUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
