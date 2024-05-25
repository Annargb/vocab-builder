import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./trainingOperations";

const initialState = {
  tasks: [],
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
      .addCase(fetchTasks.rejected, handleRejected);
  },
});

export const trainingReducer = trainingSlice.reducer;
