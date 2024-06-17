import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, sendAnswers } from "./trainingOperations";

const initialState = {
  tasks: [],
  results: [],
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

export const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload.tasks;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(sendAnswers.pending, handlePending)
      .addCase(sendAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.results = action.payload;
      })
      .addCase(sendAnswers.rejected, handleRejected);
  },
});

export const trainingReducer = trainingSlice.reducer;
