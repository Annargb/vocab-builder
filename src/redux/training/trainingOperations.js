import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchTasks = createAsyncThunk(
  "training/tasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/tasks");
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendAnswers = createAsyncThunk(
  "training/answers",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("words/answers", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
