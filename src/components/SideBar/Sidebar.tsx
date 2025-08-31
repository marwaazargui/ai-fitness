import { Dumbbell, Heater, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation(); // ✅ correct way

  const mainNavigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Meal", href: "/meal", icon: Heater },
    { name: "WorkOuts", href: "/Workout", icon: Dumbbell }, // only for ADMIN
  ];
  return (
<aside className="fixed top-0 left-0 h-screen w-60 bg-gray-100 shadow z-50 flex flex-col p-8 overflow-y-auto">
      {" "}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-xs w-full">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 leading-tight">
          AI Health & Fitness
        </h2>
        {/* Navigation */}
        <nav className="mt-8">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={
                  "flex items-center px-4 py-2 rounded-lg hover:bg-white transition font-medium " +
                  (isActive ? "bg-white text-purple-600" : "text-gray-700")
                }
              >
                <Icon
                  className={`w-10 h-7 py-1 ${
                    isActive ? "text-primary" : "text-gray-400"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
