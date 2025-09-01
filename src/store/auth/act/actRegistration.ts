// actPutProfileData.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Registrationdata } from "../authslice";

export const actRegistration = createAsyncThunk(
  "auth/Registration",
  async (values: Registrationdata) => { // Use Changepassword type
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "https://localhost:44369/api/Account/register",
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data as Registrationdata; // <-- match reducer
  }
);
