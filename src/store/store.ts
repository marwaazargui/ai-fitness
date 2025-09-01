import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authslice";
import profileReducer from "./Profile-management/profileslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,

    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
