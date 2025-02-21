"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        router.push("/home");
      } else {
        console.error("Failed to register:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-700 via-blue-500 to-blue-700 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-700">Create an Account</h2>
        <p className="text-gray-600 text-center mt-1">Sign up to get started</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => console.log("Google Auth triggered")}
        >
          <Image src="/google-icon.png" alt="Google" width={20} height={20} /> Sign up with Google
        </button>

        <button
          className="w-full bg-gray-800 text-white py-3 rounded-lg mt-2 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => console.log("GitHub Auth triggered")}
        >
          <Image src="/github-icon.png" alt="GitHub" width={20} height={20} /> Sign up with GitHub
        </button>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/" className="text-blue-600 cursor-pointer hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
