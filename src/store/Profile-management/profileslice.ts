import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { actGetProfile } from "../Profile-management/act/actGetProfile";
import { actUploadPicture } from "./act/actUploadPicture";
import { actPutProfileData } from "./act/actUpdateProfile";

export interface ProfileData {
  profilePicture: string | null;
  firstName: string;
  lastName: string;
  email: string;
}
export interface Changepassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
interface IInitialState {
  profile: ProfileData | null;
  Changepassword: Changepassword | null;
  loading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  profile: null,
  Changepassword: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get profile
    builder.addCase(actGetProfile.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(actGetProfile.fulfilled, (state, action) => {
      state.profile = action.payload as ProfileData;
      state.loading = false;
    });
    builder.addCase(actGetProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch profile";
    });
     // Handling for uploading a new picture
    builder.addCase(actUploadPicture.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(actUploadPicture.fulfilled, (state, action) => {
      // Update the profile with the new data from the API response
      state.profile = action.payload as ProfileData;
      state.loading = false;
    });
    builder.addCase(actUploadPicture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string || "Failed to upload picture.";
    });


     builder.addCase(actPutProfileData.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      actPutProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        if (state.profile) {
          // Keep email unchanged since it is a disabled input
          state.profile = {
            ...state.profile,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: state.profile.email, // Keep the original email
          };
        }
        state.loading = false;
      }
    );
    builder.addCase(actPutProfileData.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Failed to update profile";
    });
  },
});

export default profileSlice.reducer;
