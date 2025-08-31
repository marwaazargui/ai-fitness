import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTable from "./pages/Meals/MealsList";
import Main from "./components/SideBar/Main";
import MealsPage from "./pages/Meals/MealsList";
import WorkoutsPage from "./pages/Workouts/workoutsList";
import Dashboard from "./pages/Dashboard/dashboard";
import Profile from "./pages/Profile/ProfileHeader";

function AppContent() {
  return (
    <Routes>
      {/* Redirect root to login */}
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

      {/* Auth landing page */}
      {/* <Route path="/*" element={<AuthLandingPage />} /> */}

      {/* Sidebar layout with nested routes */}
      <Route element={<Main />}>
        <Route path="meal" element={<MealsPage />} />
        <Route path="Workout" element={<WorkoutsPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile/account" element={<Profile />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
