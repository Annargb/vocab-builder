import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchSelectOptions = createAsyncThunk(
  "dictionary/selectOptions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/categories");
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTotalCount = createAsyncThunk(
  "dictionary/totalCount",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/statistics");
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnWords = createAsyncThunk(
  "recommend/ownWords",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { keyword, category, isIrregular } =
        state.dictionary.dictionaryFilter;
      const { page } = state.dictionary;

      const queryParams = new URLSearchParams();

      keyword && queryParams.set("keyword", keyword);
      category && queryParams.set("category", encodeURIComponent(category));
      page && queryParams.set("page", page);
      category === "verb" &&
        isIrregular !== undefined &&
        queryParams.set("isIrregular", isIrregular);

      // console.log(queryParams);
      const response = await axios.get(`words/own?${queryParams}`);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
