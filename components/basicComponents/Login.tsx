import React from "react";

function Login() {
  return (
    <div
      id="login-form-container"
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
    >
      <form className="bg-white p-6 md:p-8 rounded-xl w-11/12 max-w-sm shadow-lg transform scale-95 transition-transform duration-300 ease-in-out">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        
        {/* Username Input */}
        <div className="mb-4 relative">
          <i className="bx bxs-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <i className="bx bxs-lock-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        {/* Alternative Login Options */}
        <div className="text-center my-4 text-gray-500">Or login with</div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition mb-2">
          <i className="bx bxl-google mr-2 text-lg"></i> Sign in with Google
        </button>

        {/* LeetCode Login */}
        <button className="w-full flex items-center justify-center bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
          <i className="bx bx-code mr-2 text-lg"></i> Sign in with LeetCode
        </button>

        {/* Close Button */}
        <button 
          type="button" 
          id="close-login-form" 
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition text-2xl"
        >
          &times;
        </button>
      </form>
    </div>
  );
}

export default Login;
