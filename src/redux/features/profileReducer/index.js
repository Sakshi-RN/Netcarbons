import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import Config from "../../../config"; // Update the path as necessary
import { Api } from "../../apiList";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem("token")); // Retrieve the token
      const response = await axios.get(`${Config.baseUrl}/${Api.getProfile}`, {
        headers: {
          ...Config.appHeaders,
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem("token")); // Retrieve the token
      const response = await axios.patch(
        `${Config.baseUrl}/${Api.updateProfile}`,
        profileData,
        {
          headers: {
            ...Config.appHeaders,
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);


const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: {},
    fetchLoading: false,
    fetchError: null,
    updateLoading: false,
    updateError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.fetchLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.fetchLoading = false;
        state.fetchError = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.updateLoading = true;
        state.updateError = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updateLoading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateLoading = false;
        state.updateError = action.payload;
      });
  },
});

export default profileSlice.reducer;
