import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchRecommendedWords = createAsyncThunk(
  "recommend/words",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { keyword, category, isIrregular } =
        state.recommend.recommendFilter;
      const { page } = state.recommend;

      const queryParams = new URLSearchParams();

      keyword && queryParams.set("keyword", keyword);
      category && queryParams.set("category", encodeURIComponent(category));
      page && queryParams.set("page", page);
      category === "verb" &&
        isIrregular !== undefined &&
        queryParams.set("isIrregular", isIrregular);

      // console.log(queryParams);
      const response = await axios.get(`words/all?${queryParams}`);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
