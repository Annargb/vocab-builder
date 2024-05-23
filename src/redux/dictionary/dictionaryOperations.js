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
  "dictionary/ownWords",
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

      const response = await axios.get(`words/own?${queryParams}`);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createWord = createAsyncThunk(
  "dictionary/createWord",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("words/create", data);
      console.log(response.data);
      toast.success("A new word has been successfully created.");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "dictionary/deleteWord",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`words/delete/${id}`);
      toast.success("The word has been successfully deleted.");
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
