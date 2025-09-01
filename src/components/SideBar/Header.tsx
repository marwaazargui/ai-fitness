import { ChevronDown, Menu } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../assets/images/DefaultProfile.png" // <-- Add this line

interface HeaderProps {
  onMenuClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed top-0 right-0 left-0 lg:left-40 h-12 bg-white border-b border-gray-200 z-30">
      <div className="h-full px-3 flex items-center justify-between">
        {/* Menu Button (mobile only) */}
        <div className="relative lg:hidden" ref={mobileDropdownRef}>
          <div
            className="flex items-center gap-2 border-l border-gray-200 cursor-pointer pr-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ></div>
        </div>

        {/* Search Bar */}
        <div className="sm:block right-1 w-80"></div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5">
          {/* Notification Icon */}
          <button
            className="lg:hidden p-1.5 -ml-1.5 rounded-lg hover:bg-gray-100 pl-2"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          {/* User Profile */}
          <div
            className="relative left-1 hidden sm:block"
            ref={desktopDropdownRef}
          >
            <div
              className="flex items-center gap-2 pl-3 border-l border-gray-200 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="h-7 w-7 rounded-full overflow-hidden">
                     <img
                    src={DefaultProfile}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                {/* {profile?.basicProfile?.profilePicture ? (
                  <img
                    src={''}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-[#DBEAFE] text-[#29ABE2] flex items-center justify-center font-medium text-xs">
                    {'Marwa'} {"Azargui"}
                  </div>
                )} */}
                <div className="h-full w-full bg-[#DBEAFE] text-[#29ABE2] flex items-center justify-center font-medium text-xs">
                  {"Marwa"} {"Azargui"}
                </div>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="flex  flex-col items-end">
                  <span className="text-xs font-medium text-gray-700">
                    {"Marwa"} {"Azargui"}
                  </span>
                </div>
                <ChevronDown
                  className={`h-3.5  w-3.5 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h3 className="text-base font-medium text-gray-900">
                    {"Marwa Azargui"}
                  </h3>
                </div>

                <div className="py-2">
                  <button
                    onClick={() => {
                      navigate("/profile/account");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    Profile Settings
                  </button>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <button
                    id="logout-button"
                    onClick={() => {
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
