import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchRecommendedWords = createAsyncThunk(
  "recommend/words",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const params = {
        ...state.recommend.recommendFilter,
        page: state.recommend.page,
      };
      console.log(params);
      const response = await axios.get("words/all", params);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
