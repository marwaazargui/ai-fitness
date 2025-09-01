import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, updateUserAttribute, type User } from "../store/auth/authslice";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const useUserDataSync = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  // Sync Redux with localStorage on load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (JSON.stringify(parsedUser) !== JSON.stringify(user)) {
          dispatch(setCredentials({
            token: storedToken,
            user: parsedUser
          }));
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, [dispatch, user]);

  const syncUserAttribute = (attribute: string, value: any, callback?: () => void) => {
dispatch(updateUserAttribute({ key: attribute as keyof User, value }));

    if (user) {
      const updatedUser = { ...user, [attribute]: value };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    if (callback) {
      setTimeout(callback, 0);
    }
  };

  const refreshUserData = () => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(setCredentials({ token: storedToken, user: parsedUser }));
        return true;
      } catch (error) {
        console.error("Failed to refresh user data:", error);
        return false;
      }
    }
    return false;
  };

  const completeRegistration = (callback?: () => void) => {
    syncUserAttribute("registrationCompleted", true, callback);
  };

  return {
    syncUserAttribute,
    refreshUserData,
    completeRegistration,
    user,
  };
};
