// import { Dumbbell, Heater, Home } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const location = useLocation(); // ✅ correct way

//   const mainNavigation = [
//     { name: "Dashboard", href: "/dashboard", icon: Home },
//     { name: "Meal", href: "/meal", icon: Heater },
//     { name: "WorkOuts", href: "/Workout", icon: Dumbbell }, // only for ADMIN
//   ];
//   return (
// <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-100 shadow z-50 flex flex-col p-8 overflow-y-auto">
//       {" "}
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="w-full h-full bg-gray-300"></div>
//       </div>
//       {/* Content */}
//       <div className="relative z-10 text-center max-w-xs w-full">
//         <h2 className="text-2xl font-bold text-purple-600 mb-6 leading-tight">
//           AI Health & Fitness
//         </h2>
//         {/* Navigation */}
//         <nav className="mt-8">
//           {mainNavigation.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 onClick={onClose}
//                 className={
//                   "flex items-center px-4 py-2 rounded-lg hover:bg-white transition font-medium " +
//                   (isActive ? "bg-white text-purple-600" : "text-gray-700")
//                 }
//               >
//                 <Icon
//                   className={`w-10 h-7 py-1 ${
//                     isActive ? "text-primary" : "text-gray-400"
//                   }`}
//                 />
//                 <span>{item.name}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </aside>
//   );
// }


import {
  LayoutGrid,
  Calendar,
  Users,
  Heart,
  UserSquare,
  History,
  Settings,
  Gift,
  Heater,
  Dumbbell,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 border-r bg-white p-4 flex flex-col fixed">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-pink-600 p-2 rounded-lg">
          <Heart className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-semibold">
          AI <span className="text-pink-600">Health</span>
        </span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-6">
        <a href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
          <LayoutGrid className="w-5 h-5" />
          <span>Dashboard</span>
        </a>


        <a href="/meal" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
          <Heater className="w-5 h-5" />
          <span>Meals</span>
        </a>

        <a href="workout" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
          <Dumbbell className="w-5 h-5" />
          <span>Work outs</span>
        </a>


        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
          <Gift className="w-5 h-5" />
          <span>Share & Earn</span>
        </a>
      </nav>
    </div>
  );
}
