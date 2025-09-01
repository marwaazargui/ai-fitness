import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  setCredentials,
  logout,
  setError,
} from "../store/auth/authslice";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AppDispatch, RootState } from "../store/store";
import actAuthLogin from "../store/auth/act/actAuthLogin";
import { useUserDataSync } from "./useUserDataSync";


const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInType = z.infer<typeof signInSchema>;

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { syncUserAttribute, completeRegistration, refreshUserData } = useUserDataSync();

  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Initialize Redux from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(
          setCredentials({
            token: storedToken,
            user: parsedUser,
          })
        );
      } catch (err) {
        console.error("Failed to parse stored user", err);
      }
    }
  }, [dispatch]);

  // Login form
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
  } = useForm<SignInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const login = async (credentials: SignInType) => {
    try {
      const result = await dispatch(actAuthLogin(credentials)).unwrap();

      if (result && result.token) {
        const userObj = {
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          profilePicture: result.profilePicture,
          roles: result.roles,
        };

        dispatch(
          setCredentials({
            token: result.token,
            user: userObj,
          })
        );

        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(userObj));

        navigate("/dashboard");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      console.error("Login failed:", err);
      dispatch(setError(err instanceof Error ? err.message : "Login failed"));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Registration form (example)
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: formErrorsLogin },
  } = useForm<SignInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });


  
  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,

    register,
    handleSubmit,
    formErrors,
    reset,
    login,
    logout: handleLogout,

    registerLogin,
    handleSubmitLogin,
    formErrorsLogin,
    handleUpdateUserAttribute: syncUserAttribute,
    refreshUserData,
    markRegistrationComplete: completeRegistration,


    searchParams,
  };
};
