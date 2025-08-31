import { Link } from "react-router-dom";
import MainPic from "../../assets/images/MainPic.png";
import ReactPhoneInput from "react-phone-input-2";

const Registration = () => {
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
              Join millions of fitness enthusiasts on their journey to a
              healthier, stronger you.
            </p>
          </div>
        </div>
        {/* Right Panel - Login Form */}
        <div className="lg:col-span-3 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md mx-auto">
            {/* Login Form Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Sign Up to FitOn
              </h2>
              <p className="text-gray-600">
                Welcome back! Please enter your details.
              </p>
            </div>
            {/* Login Form */}
            <form onSubmit={(e: any) => {
                e.preventDefault()
                console.log(e.values)}
                } className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  text-left"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your First Name"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  text-left"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your Last Name"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  text-left"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="space-y-2">
                  <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  text-left"
                >
                  Phone
                </label>
                <ReactPhoneInput
                  country={"ca"}
                  onlyCountries={["ca"]}
                  disableDropdown={true}
                  countryCodeEditable={false}
                  specialLabel="" // 👈 removes the "Phone" label
                  inputClass="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#29abe2] focus:border-[#29abe2] transition-all duration-300"
                  inputStyle={{ width: "100%", height: "43px" }}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="paswsord"
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="paswsord"
                  placeholder="Enter your Confirm Password"
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 border-gray-300'
                  }`}
                  required
                />
              </div>
              {/* Continue Button */}
              <button
                type="submit"
                className="w-full h-12 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Sign Up
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
                  to={"/login"}
                  className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-150"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
