import { useState } from "react";
import Overview from "./Overview"; // import your Overview component
import UserInfo from "./UserInfo";
import { Settings } from "./Settings";
import DefaultProfile from "../../assets/images/DefaultProfile.png" // <-- Add this line

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="flex items-start gap-6 mb-8">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={DefaultProfile}
            alt="Profile"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">Max Smith</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-1 font-medium text-sm ${
              activeTab === "overview"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("userinfo")}
            className={`py-3 px-1 font-medium text-sm ${
              activeTab === "userinfo"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            User Info
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-1 font-medium text-sm ${
              activeTab === "settings"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Render Tab Content */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <Overview switchToSettings={() => setActiveTab("settings")} />
        )}
        {activeTab === "userinfo" && <UserInfo />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
}
