import React, { useState } from 'react';
import MainPic from '../../assets/images/MainPic.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const validateEmail = (email:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex?.test(email);
  };
  const handleEmailSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // Reset errors
    setErrors({});
    // Validate email
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }
    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    setIsLoading(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Mock authentication success
      console.log('Email authentication successful for:', email);
    } catch (error) {
      setErrors({ email: 'Authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleAuth = async () => {
    setIsGoogleLoading(true);
    // Simulate Google OAuth
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Google authentication successful');
    } catch (error) {
      console.error('Google authentication failed');
    } finally {
      setIsGoogleLoading(false);
    }
  };
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
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700  text-left">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                    errors?.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors?.email && (
                  <p className="text-sm text-red-600">{errors?.email}</p>
                )}
              </div>
                <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                  Password
                </label>
                <input
                  id="password"
                  type="paswsord"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setpassword(e?.target?.value)}
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
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
                  'Login'
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
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-150"
                  onClick={() => console.log('Navigate to sign up')}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;