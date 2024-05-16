import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSelectOptions,
  fetchTotalCount,
  fetchOwnWords,
} from "./dictionaryOperations";

const dictionaryFilter = {
  keyword: "",
  category: "",
  isIrregular: false,
};

const initialState = {
  selectOptions: [],
  dictionaryFilter,
  ownWords: [],
  page: 1,
  totalPages: 1,
  totalCount: 0,
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
  reducers: {
    setKeyword: (state, action) => {
      state.dictionaryFilter.keyword = action.payload;
    },
    setCategory: (state, action) => {
      state.dictionaryFilter.category = action.payload;
    },
    setIsIrregular: (state, action) => {
      state.dictionaryFilter.isIrregular = action.payload;
    },
  },
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
      .addCase(fetchSelectOptions.rejected, handleRejected)
      .addCase(fetchTotalCount.pending, handlePending)
      .addCase(fetchTotalCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchTotalCount.rejected, handleRejected)
      .addCase(fetchOwnWords.pending, handlePending)
      .addCase(fetchOwnWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownWords = action.payload.results;
        state.totalPages = action.payload.totalPages;
      });
  },
});

export const dictionaryReducer = dictionarySlice.reducer;
export const { setKeyword, setCategory, setIsIrregular } =
  dictionarySlice.actions;
