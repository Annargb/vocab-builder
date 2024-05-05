import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://65f9e9153909a9a65b19a2a2.mockapi.io/advert/";

export const fetchCatalog = createAsyncThunk(
  "catalog",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`catalog?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      toast.error("Oops, something went wrong! Try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
