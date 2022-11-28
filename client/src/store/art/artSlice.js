import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import artsService from "../services/artsService";

export const getArt = createAsyncThunk("GET_ART", async (id, thunkAPI) => {
  try {
    return await artsService.getArt(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createArt = createAsyncThunk(
  "CREATE_ART",
  async (artData, thunkAPI) => {
    try {
      return await artsService.createArt(artData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const artSlice = createSlice({
  name: "art",
  initialState: {
    art: null,
    isError: false,
    isLoading: false,
    message: "",
    errors: null,
  },
  reducers: {
    resetArtErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.art = action.payload[0];
      })
      .addCase(getArt.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.art = null;
      });
    builder
      .addCase(createArt.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(createArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(createArt.rejected, (state, action) => {
        state.isError = false;
        state.isLoading = true;
        state.errors = action.payload;
      });
  },
});

const gridSlice = createSlice({
  name: "grid",
  initialState: true,
  reducers: {
    changeState: (state, action) => {
      console.log(state);
      console.log(action);
      return !state;
    },
  },
});

export const resetArtErrors = artSlice.actions;
export default artSlice.reducer;
export const gridSliceAction = gridSlice.actions.changeState;
