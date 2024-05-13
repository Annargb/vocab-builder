import { createSlice } from "@reduxjs/toolkit";

const recommendFilter = {
  keyword: "",
  category: "",
  isIrregular: false,
};

const initialState = {
  recommendFilter,
  page: 1,
  isLoading: false,
  error: null,
};

export const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

// const handlePending = (state) => {
//   state.error = null;
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.error = action.payload;
//   state.isLoading = false;
// };

export const recommendReducer = recommendSlice.reducer;
