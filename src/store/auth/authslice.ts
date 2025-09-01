import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // import actConfirmEmail from '../auth/act/actConfirmEmail';
import actAuthLogin, { type AuthResponse } from "../auth/act/actAuthLogin";
import { actRegistration } from "../auth/act/actRegistration";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  roles: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  registrationSuccess: boolean; // just a flag
  registrationError: string | null; // registration error
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  registrationSuccess: false,
  registrationError: null,
};
export interface Registrationdata {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    updateUserAttribute: (
      state,
      action: PayloadAction<{ key: keyof User; value: any }>
    ) => {
      if (state.user) {
        state.user[action.payload.key] = action.payload.value;
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },

    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
     resetRegistrationState: (state) => {
    state.registrationSuccess = false;
    state.registrationError = null;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actAuthLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        actAuthLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false;
          state.token = action.payload.token;
          state.isAuthenticated = true;

          const user: User = {
            email: action.payload.email,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            profilePicture: action.payload.profilePicture,
            roles: action.payload.roles,
          };

          state.user = user;
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", JSON.stringify(user));
        }
      )
      .addCase(actAuthLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Login failed";
        state.isAuthenticated = false;
      });

    // Registration
    builder
      .addCase(actRegistration.pending, (state) => {
        state.isLoading = true;
        state.registrationError = null;
        state.registrationSuccess = false;
      })
      .addCase(actRegistration.fulfilled, (state) => {
        state.isLoading = false;
        state.registrationSuccess = true; // registration succeeded
      })
      .addCase(actRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.registrationError = action.error.message || "Registration failed";
        state.registrationSuccess = false;
      });
  },
});

export const {
  setCredentials,
  logout,
  updateUserAttribute,
  startLoading,
  stopLoading,
  setError,
  resetRegistrationState,
} = authSlice.actions;

export default authSlice.reducer;
