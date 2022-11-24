import { configureStore } from "@reduxjs/toolkit";
import artsSlice from "./arts/artsSlice";
import artSlice from "./art/artSlice";

export const store = configureStore({
  reducer: {
    arts: artsSlice,
    art: artSlice,
  },
});
