import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProfileData } from "../profileslice";

export const actUploadPicture = createAsyncThunk(
  "profile/UploadPicture",
  async (imageFile: File, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return rejectWithValue("No authentication token found.");
      }

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("image", imageFile); // The key 'profilePicture' must match your API's expected field name

      const response = await axios.post(
        "https://localhost:44304/api/Account/upload-picture",
        formData, // <-- Send the FormData object here
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            // 'Content-Type' is automatically set to 'multipart/form-data' by the browser when using FormData
          },
        }
      );

      return response.data as ProfileData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "An unexpected error occurred.");
      }
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);