// actPutProfileData.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProfileData } from "../profileslice";

interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
}

export const actPutProfileData = createAsyncThunk(
  "profile/putProfile",
  async (values: UpdateProfilePayload) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      "https://localhost:44304/api/Account/EditProfile",
      values, // <-- send email here
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data as ProfileData;
  }
);
