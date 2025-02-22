"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold">
        {getGreeting()}, {session?.user?.name}!
      </h1>
      <p className="text-gray-600">Welcome to your dashboard.</p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          Logout
        </button>
        <button
          onClick={() => router.push("/profile")}
          className="bg-green-500 text-white p-2 rounded-lg"
        >
          Go to Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
