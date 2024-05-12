import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectOptions } from "./dictionaryOperations";

const initialState = {
  selectOptions: [],
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

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectOptions.pending, handlePending)
      .addCase(fetchSelectOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newArr = action.payload.map((item) => {
          return {
            value: item,
            label: item.charAt(0).toUpperCase() + item.slice(1),
          };
        });
        state.selectOptions = newArr;
      })
      .addCase(fetchSelectOptions.rejected, handleRejected);
  },
});

export const dictionaryReducer = dictionarySlice.reducer;
