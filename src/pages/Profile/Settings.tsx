import React, { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import DefaultProfile from "../../assets/images/DefaultProfile.png"; // Adjust the path if needed
import useProfile from "../../hooks/useProfile";
import Swal from "sweetalert2"; // Import SweetAlert2
import { get } from "react-hook-form";

interface ProfileProps {
  profile:
    | {
        firstName: string;
        lastName: string;
        email: string;
        profilePicture?: string | null;
      }
    | null
    | undefined; // The prop type for the component
}

const Settings = ({ profile }: ProfileProps) => { // Use destructuring for clearer prop access
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);
const { uploadPicture ,getProfileData , updateProfile, error} = useProfile();
  // Use a state variable to hold form data, initialized with props
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
  });

  // Use useEffect to set the initial avatar state from the profile prop
  useEffect(() => {
    if (profile?.profilePicture) {
      setAvatar(profile.profilePicture);
    }
  }, [profile]); // Re-run this effect if the profile prop changes
 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Call the `updateProfile` hook from useProfile
    const result = await updateProfile(formData);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Profile updated successfully.", // This message is hardcoded, but you can change it
        timer: 2000,
        showConfirmButton: false,
      });
      getProfileData(); // Refresh profile data after successful update
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.error,
      });
    }
  };

  // Function to handle changes in the input fields
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle input changes for form fields
 const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Step 1: Create a local preview immediately
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target?.result as string);
      reader.readAsDataURL(file);

      // Step 2: Call the Redux thunk to upload the file
      const result = await uploadPicture(file);

      if (result.success) {
        getProfileData(); // Refresh profile data after successful upload
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Profile picture uploaded successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error,
        });
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Editable Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative">
            {/* Display avatar state, which will be the new file or the existing profile picture */}
            <img
              src={avatar || DefaultProfile}
              alt="Avatar"
              className="w-28 h-28 object-cover rounded-xl border border-gray-200 shadow-sm"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-full p-1 cursor-pointer shadow hover:bg-gray-50 transition"
              title="Change avatar"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2a2.828 2.828 0 11-4-4l6 6a2.828 2.828 0 11-4-4z"
                />
              </svg>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Profile Photo</p>
            <p className="text-gray-400 text-sm">JPG, PNG, up to 2MB</p>
          </div>
        </div>

        {/* Name Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              First Name
            </label>
            <input
              name="firstName" // Add a name attribute
              value={formData.firstName}
              onChange={handleInputChange} // Add onChange handler
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Last Name
            </label>
            <input
              name="lastName" // Add a name attribute
              value={formData.lastName}
              onChange={handleInputChange} // Add onChange handler
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email
          </label>
          <input
            value={profile?.email || ''} // Use the prop value for email
            type="email"
            placeholder="Email"
            disabled
            className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 text-gray-700 opacity-80 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-7 py-2.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg font-semibold hover:from-orange-500 hover:to-pink-600 transition disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export { Settings };