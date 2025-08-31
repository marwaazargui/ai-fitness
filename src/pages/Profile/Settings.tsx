import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import DefaultProfile from '../../assets/images/DefaultProfile.png'; // Adjust the path if needed

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Profile saved!');
    }, 1500);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-14 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Editable Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative">
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
            <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
          <input
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