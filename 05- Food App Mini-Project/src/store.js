import { configureStore } from "@reduxjs/toolkit";

import thaaliAppSlice from "./slices/thaaliSlice";

export const store = configureStore({
  reducer: {
    thaaliItems: thaaliAppSlice,
  },
});
