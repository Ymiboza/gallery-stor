import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import artsService from "../services/artsService";

export const getArts = createAsyncThunk("GET_ARTS", async (_, thunkAPI) => {
  try {
    return await artsService.getArts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const artsSlice = createSlice({
  name: "arts",
  initialState: {
    arts: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.arts = action.payload;
      })
      .addCase(getArts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.arts = null;
      });
  },
});
export default artsSlice.reducer;
