import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const actGetProfile = createAsyncThunk(
  "profile/getProfile",
  async () => {
    try {
      // Get the token from localStorage
      const token =  localStorage.getItem("token")

      if (!token) {
        throw new Error("No token found in localStorage");
      }

      // Make request with Authorization header
      const response = await axios.get("https://localhost:44304/api/Account/Profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
);
