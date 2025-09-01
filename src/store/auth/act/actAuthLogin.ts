import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface AuthResponse {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  roles: string[];
  isAuthenticated: boolean;
  username: string;
  expiresOn: string;
}
const {Base_URL} = import.meta.env.VITE_APP_API_URL;
const actAuthLogin = createAsyncThunk<AuthResponse, { email: string; password: string }>(
  "auth/actAuthLogin",
  async (formData) => {
    try {
      const res = await axios.post<AuthResponse>(
        "https://localhost:44304sign/api/Account/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      return res.data;
    } catch (error) {
      throw error instanceof Error ? error : new Error("Login failed");
    }
  }
);

export default actAuthLogin;
