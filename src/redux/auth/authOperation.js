import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("users/signup", credentials);
      setAuthHeader(response.data.token);

      toast.success("Registration is successful");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("users/signin", credentials);
      setAuthHeader(response.data.token);

      toast.success("Log in is successful");

      // console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      // const response = await axios.post("/users/signout");
      await axios.post("/users/signout");
      clearAuthHeader();
      toast.success("Log out successful");
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
