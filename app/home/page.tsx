"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Code,
  Users,
  Clock,
  BookOpen,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Internal imports
import Countdown from "../../components/basicComponents/CountDown";
import CurvedTimeline from "../../components/basicComponents/CurvedTimeLine";
import HeroSection from "../../components/basicComponents/HeroSection";
import FaqSection from "../../components/basicComponents/FaqSection";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set project start date
  const projectStartDate = new Date("2025-03-01").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = projectStartDate - now;
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [projectStartDate]);

  return (
    <div className="min-h-screen bg-white">

      {/* Fixed gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-green-50/80" />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Dashboard */}
        <div className="flex justify-center mt-8">
          <Link href="/dashboard">
            <button className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Go to Dashboard
            </button>
          </Link>
        </div>

 
        {/* Project Tracks Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">
              JOIN US ON DSA-BOOTCAMP
            </h2>
            <p className="text-2xl mb-12 text-gray-600 font-medium"></p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <Calendar size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Weekend Live Sessions
                </h3>
                <p className="text-gray-600 text-lg">
                  Mentor-led interactive sessions covering essential Linear DSA
                  concepts like Arrays, Linked Lists, Stacks, Queues, and more.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <BookOpen size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Practice & Reinforcement
                </h3>
                <p className="text-gray-600 text-lg">
                  Solve 35+ beginner-friendly coding problems from various
                  platforms to strengthen problem-solving skills.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <CheckCircle size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Confidence to Progress
                </h3>
                <p className="text-gray-600 text-lg">
                  Build a strong DSA foundation, making it easier to transition to
                  advanced topics and interview prep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <div id="timeline">
          <CurvedTimeline />
        </div>

        {/* Prerequisites Section */}
        <section id="setup" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-12 text-center animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">
              Prerequisites & Setup
            </h2>
            {/* Additional prerequisites content */}
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faq">
          <FaqSection />
        </div>

        {/* Community Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md text-center">
              Join GFG Community
            </h2>
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="https://chat.whatsapp.com/FJX8ucNavszCQlTzYqRPFB"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gfgsnuofficial?igsh=MWdkYTRmOWw5eHY1Mg=="
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Instagram size={36} />
              </a>
              <a
                href="https://x.com/gfgsnuofficial?t=Ng1WqtLHg_W8XYOSusui-A&s=08"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Twitter size={36} />
              </a>
              <a
                href="https://www.linkedin.com/company/geeksforgeeks-snu-chapter/"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Linkedin size={36} />
              </a>
            </div>
            <p className="text-lg text-gray-600">
              Organized by GeeksforGeeks Chapters SNU x SKEPSIS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
