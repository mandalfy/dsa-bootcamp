import React from "react";

function Login() {
  return (
    <div
      id="login-form-container"
      className="display-none fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
    >
      <form className="bg-white p-6 md:p-8 rounded-xl w-11/12 max-w-sm shadow-lg transform scale-95 transition-transform duration-300 ease-in-out">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <div className="mb-4 relative">
          <i className="bx bxs-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <i className="bx bxs-lock-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register</a>
        </p>
        <button 
          type="button" 
          id="close-login-form" 
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
        >
          &times;
        </button>
      </form>
    </div>
  );
}

export default Login;

