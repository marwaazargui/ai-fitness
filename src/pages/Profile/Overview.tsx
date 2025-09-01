import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";

interface OverviewProps {
  switchToSettings: () => void;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: string | null;
  } | null | undefined; // <-- This is the key change
}

export default function Overview({ switchToSettings, profile }: OverviewProps) {
  // Use optional chaining (?) to safely access properties,
  // in case the 'profile' object is not provided.
  const firstName = profile?.firstName;
  const lastName = profile?.lastName;
  const email = profile?.email;

  return (
    <div className="max-w-2xl mx-auto mt-14 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Profile Overview</h1>
        <Button
          onClick={switchToSettings}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: 44,
            px: 3,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "12px",
            textTransform: "none",
            background: "linear-gradient(90deg, #fb923c, #ec4899)",
            "&:hover": {
              background: "linear-gradient(90deg, #f97316, #db2777)",
            },
            boxShadow: "0 4px 16px rgba(236,72,153,0.10)",
          }}
        >
          Edit Profile
        </Button>
      </div>

      <div className="space-y-6 bg-white rounded-2xl shadow p-8">
        {/* First Name */}
        <div className="flex items-center gap-6">
          <span className="w-40 text-gray-500 font-medium">First Name</span>
          <span className="text-gray-900 font-semibold text-lg">{firstName}</span>
        </div>

        {/* Last Name */}
        <div className="flex items-center gap-6">
          <span className="w-40 text-gray-500 font-medium">Last Name</span>
          <span className="text-gray-900 font-semibold text-lg">{lastName}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-6">
          <span className="w-40 text-gray-500 font-medium">Email</span>
          <span className="text-gray-900 font-semibold text-lg">{email}</span>
        </div>
      </div>
    </div>
  );
}