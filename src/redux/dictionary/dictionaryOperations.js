import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchSelectOptions = createAsyncThunk(
  "dictionary",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/categories");
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);