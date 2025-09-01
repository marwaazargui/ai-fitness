import React, { useState } from "react";
import MainPic from "../../assets/images/MainPic.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import eyeStroke from "../../assets/icons/eye-stroke-rounded.svg";
import lockPassword from "../../assets/icons/lock-password-stroke-rounded.svg";
import user from "../../assets/icons/user.svg";
import eyeSlash from "../../assets/icons/view-off-slash-stroke-rounded.svg";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        registerLogin,
        handleSubmitLogin,
        formErrorsLogin,
        isLoading,
        login,
    } = useAuth();

    return (
        <div className="min-h-screen bg-white">
            {/* Mobile Header - Only visible on mobile/tablet */}
            <div className="lg:hidden bg-gray-100 px-6 py-8 text-center">
                <h1 className="text-2xl font-bold text-purple-600 mb-2">
                    Get Your FitOn
                </h1>
                <p className="text-gray-600 text-sm">
                    Join millions on their fitness journey
                </p>
            </div>
            {/* Main Content */}
            <div className="lg:grid lg:grid-cols-5 lg:min-h-screen">
                {/* Left Panel - Desktop Only */}
                <div className="hidden lg:flex lg:col-span-2 bg-gray-100 flex-col justify-center items-center p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500"></div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 text-center max-w-md">
                        <h1 className="text-4xl font-bold text-purple-600 mb-8 leading-tight">
                            Get Your FitOn
                        </h1>
                        {/* Fitness Group Image */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={MainPic}
                                alt="Group of diverse people exercising together in a modern fitness studio"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        {/* Motivational Text */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Join millions of fitness enthusiasts on their journey to a healthier, stronger you.
                        </p>
                    </div>
                </div>
                {/* Right Panel - Login Form */}
                <div className="lg:col-span-3 flex items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md mx-auto">
                        {/* Login Form Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Log In to FitOn
                            </h2>
                            <p className="text-gray-600">
                                Welcome back! Please enter your details.
                            </p>
                        </div>
                        {/* Login Form */}
                        <form onSubmit={handleSubmitLogin(login)} className="space-y-6">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700  text-left"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <img
                                        src={user}
                                        alt="User Icon"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                                    />
                                    <input
                                        {...registerLogin("email")}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`w-full px-10 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300`}
                                        required
                                    />
                                    {formErrorsLogin?.email && (
                                        <p className="text-sm text-red-600">{formErrorsLogin.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 text-left"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <img
                                        src={lockPassword}
                                        alt="Password Icon"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                                    />
                                    <img
                                        onClick={() => setShowPassword((prev: boolean) => !prev)}
                                        src={showPassword ? eyeStroke : eyeSlash}
                                        alt="Toggle visibility"
                                        id="password"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                                    />
                                    <input
                                        {...registerLogin("password")}
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`w-full px-10 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300`}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Continue Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </form>
                        {/* Divider */}
                        <div className="flex items-center my-8">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-sm text-gray-500 bg-white">or</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>
                        {/* Sign Up Link */}
                        <div className="text-center mt-8">
                            <p className="text-gray-600">
                                Don't have an account?{" "}
                                <Link
                                    to={"/registartion"}
                                    className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-150"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;