import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSelectOptions,
  fetchTotalCount,
  fetchOwnWords,
  createWord,
  deleteWord,
  editWord,
} from "./dictionaryOperations";
import { addRecommendedWord } from "../recommend/recommendOperations";

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
      })
      .addCase(createWord.pending, handlePending)
      .addCase(createWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCount += 1;
        if (state.ownWords < 7) {
          state.ownWords = [...state.ownWords, action.payload];
        }
      })
      .addCase(createWord.rejected, handleRejected)
      .addCase(deleteWord.pending, handlePending)
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const newArr = state.ownWords.filter(
          (word) => word._id !== action.payload.id
        );

        state.ownWords = newArr;
        if (state.totalCount > 0) {
          state.totalCount -= 1;
        } else {
          state.totalCount = 0;
        }
      })
      .addCase(deleteWord.rejected, handleRejected)
      .addCase(addRecommendedWord.fulfilled, (state) => {
        state.totalCount += 1;
      })
      .addCase(editWord.pending, handlePending)
      .addCase(editWord.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;

        // const newArr = state.ownWords.map((word) => {
        //   console.log(word._id);
        //   console.log(payload._id);
        //   if (word._id === payload.data._id) {
        //     console.log(word._id);

        //     console.log(payload.data._id);
        //     return payload.data;
        //   }
        //   return word;
        // });
        // state.ownWords = newArr;
      })
      .addCase(editWord.rejected, handleRejected);
  },
});

export const dictionaryReducer = dictionarySlice.reducer;
export const { setKeyword, setCategory, setIsIrregular } =
  dictionarySlice.actions;
