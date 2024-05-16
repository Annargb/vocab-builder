import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendedWords } from "./recommendOperations";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const recommendFilter = {
  keyword: "",
  category: "",
  isIrregular: false,
};

const initialState = {
  recommendFilter,
  recommendedWords: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

export const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.recommendFilter.keyword = action.payload;
      state.page = 1;
    },
    setCategory: (state, action) => {
      state.recommendFilter.category = action.payload;
      state.page = 1;
    },
    setIsIrregular: (state, action) => {
      state.recommendFilter.isIrregular = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedWords.pending, handlePending)
      .addCase(fetchRecommendedWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recommendedWords = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchRecommendedWords.rejected, handleRejected);
  },
});

export const recommendReducer = recommendSlice.reducer;
export const { setKeyword, setCategory, setIsIrregular } =
  recommendSlice.actions;
