import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/SideBar/Main";
import MealsPage from "./pages/Meals/MealsList";
import WorkoutsPage from "./pages/Workouts/workoutsList";
import Dashboard from "./pages/Dashboard/dashboard";
import Profile from "./pages/Profile/ProfileHeader";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { useAppSelector } from "./store/hooks";
import { useUserDataSync } from "./hooks/useUserDataSync";
import { useEffect } from "react";
import AuthLandingPage from "./components/auth/AuthLandingPage";

function AppContent() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { refreshUserData } = useUserDataSync();
  useEffect(() => {
    refreshUserData();
  }, []);
  return (
    <Routes>
      {/* Redirect root to login */}
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

      {/* Auth landing page */}
      {/* <Route path="/*" element={<AuthLandingPage />} /> */}

      {/* Sidebar layout with nested routes */}
      {isAuthenticated ? (
        <>
          <Route path='/*'element={<Main />}>
            <Route path="meal" element={<MealsPage />} />
            <Route path="Workout" element={<WorkoutsPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile/account" element={<Profile />} />
          </Route>
        </>
      ) : (
        <Route path="/*" element={<AuthLandingPage />} />
      )}
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
