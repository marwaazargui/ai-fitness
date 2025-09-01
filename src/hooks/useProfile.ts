import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import type { AppDispatch, RootState } from "../store/store";
import { useAuth } from "./useAuth";
import { actGetProfile } from "../store/Profile-management/act/actGetProfile";
import { setError } from "../store/auth/authslice";
import type { ProfileData } from "../store/Profile-management/profileslice";
import { actUploadPicture } from "../store/Profile-management/act/actUploadPicture";
import { actPutProfileData } from "../store/Profile-management/act/actUpdateProfile";


// Custom phone input styling to ensure responsiveness
export const customPhoneStyles: any = {
  containerClass: "w-full",
  inputStyle: {
    width: "100%",
    height: "34px",
    fontSize: "12px",
    borderRadius: "0.375rem",
    borderColor: "#E5E7EB",
  },
};
export interface UpdateProfileType {
  firstName: string;
  lastName: string;
}

export const useProfile = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { user } = useAuth();
  const { profile, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  const getProfileData = async () => {
    try {
      const result = await dispatch(
        actGetProfile()
        
      ).unwrap();
      return { success: true, data: result };
      
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to get location view model",
      };
    }
  };
 // New function to handle picture uploads
  const uploadPicture = async (file: File) => {
    try {
      // Dispatch the async thunk and await the result
      const resultAction = await dispatch(actUploadPicture(file));
      
      // Check if the upload was successful and return the data
      if (actUploadPicture.fulfilled.match(resultAction)) {
        return { success: true, data: resultAction.payload };
      } else {
        // If the action was rejected, get the error message
        const errorMessage = resultAction.payload as string || "Upload failed.";
        return { success: false, error: errorMessage };
      }
    } catch (error) {
      console.error("Failed to upload picture:", error);
      return {
        success: false,
        error: "An unexpected error occurred during upload.",
      };
    }
  };
// Edit profile function
const updateProfile = async (values: UpdateProfileType) => {
  try {
    const result = await dispatch(actPutProfileData(values)).unwrap();
    // On success, return a structured object with 'success' and 'data'
    return { success: true, data: result }; 
  } catch (err: any) {
    console.error("Update profile failed:", err);
    // On failure, return a structured object with 'success' and 'error'
    return { 
      success: false, 
      error: err.message || "An unexpected error occurred." 
    };
  }
};



      // Change password function
//   const ChangePassword = async (values:any ) => {
//       try {
//         const result: any = await dispatch(
//           actChangepassowrd(values)
//         ).unwrap();
//         return result; // updated profile
//       } catch (err) {
//         console.error("Update profile failed:", err);
//         dispatch(
//           setError(err instanceof Error ? err.message : "Update profile failed")
//         );
//         throw err; // re-throw in case caller wants to handle
//       }
//     };
  return {
    loading,
    error,
    profile,
    getProfileData,
    uploadPicture,
    user,
    updateProfile,
  };
};
export default useProfile;
