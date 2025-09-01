import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar  />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-60">
        <Header onMenuClick={toggleSidebar} />

        <main className="flex-grow pt-11">
          <div className="p-6 sm:py-3 lg:py-6 flex justify-center">
            {/* Constrain the Outlet content */}
            <div className="w-full max-w-5xl">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Main;
