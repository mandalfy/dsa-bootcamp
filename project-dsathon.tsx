"use client";

import { useState, useEffect } from "react";
import { Menu, Instagram, Twitter, Linkedin, MessageCircle, Calendar, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";

// Internal imports
import Countdown from "./components/basicComponents/CountDown";
import CurvedTimeline from "./components/basicComponents/CurvedTimeLine";
import FAQSection from "./components/basicComponents/FaqSection";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ProjectDSAthon: React.FC = () => {
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
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,190,200,0.1),rgba(50,170,150,0.2))]" />

        <div className="relative h-full flex flex-col items-center justify-center px-4 pt-24">
          <div className="max-w-6xl mx-auto text-center relative">
            
            {/* Title */}
            <h1 className="relative text-6xl font-bold text-white mb-8 animate-fade-in drop-shadow-[3px_3px_0px_black]">
              <span className="absolute inset-0 text-amber-400 -z-10 blur-sm">
                SKEPSIS X GFG EVENT
              </span>
              SKEPSIS X GFG EVENT
            </h1>

            {/* Event Date */}
            <p className="text-2xl text-white/90 mb-6">
              February 16 - March 23, 2025
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center items-center mb-6">
              <Countdown />
            </div>

            {/* Register Button - Now Clearly Visible */}
            <div className="mt-4 z-30">
          <a
            href="https://lu.ma/rm1ln6ks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 text-lg sm:text-xl md:text-2xl 
                         font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-lg 
                         transition-all duration-300 transform hover:scale-110 
                         hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 
                         focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg 
                         hover:shadow-blue-400/50"
            >
              Register Now
            </button>
          </a>
        </div>
          </div>
        </div>
      </section>

      <main className="bg-white w-full">
        {/* Project Tracks Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text mb-6 text-center">
              JOIN US ON DSA-BOOTCAMP
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Calendar size={48} className="animate-pulse" />,
                  title: "Weekend Live Sessions",
                  description: "Mentor-led interactive sessions covering essential Linear DSA concepts like Arrays, Linked Lists, Stacks, Queues, and more.",
                },
                {
                  icon: <BookOpen size={48} className="animate-pulse" />,
                  title: "Practice & Reinforcement",
                  description: "Solve 35+ beginner-friendly coding problems from various platforms to strengthen problem-solving skills.",
                },
                {
                  icon: <CheckCircle size={48} className="animate-pulse" />,
                  title: "Confidence to Progress",
                  description: "Build a strong DSA foundation, making it easier to transition to advanced topics and interview prep.",
                },
              ].map(({ icon, title, description }, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100">
                  <div className="text-emerald-600 mb-6">{icon}</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text mb-4">{title}</h3>
                  <p className="text-gray-600 text-lg">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <div id="timeline" className="bg-gray-50 w-full">
          <CurvedTimeline />
        </div>

        {/* FAQ Section */}
        <div id="faq" className="bg-white w-full">
          <FAQSection />
        </div>

        {/* Community Section */}
        <section className="py-20 px-4 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text mb-12">
            JOIN GFG COMMUNITY
            </h2>
            <div className="flex justify-center space-x-8 mb-12">
              {[
                { href: "https://chat.whatsapp.com/FJX8ucNavszCQlTzYqRPFB", icon: MessageCircle },
                { href: "https://www.instagram.com/gfgsnuofficial", icon: Instagram },
                { href: "https://x.com/gfgsnuofficial", icon: Twitter },
                { href: "https://www.linkedin.com/company/geeksforgeeks-snu-chapter/", icon: Linkedin },
              ].map(({ href, icon: Icon }, index) => (
                <a key={index} href={href} className="text-emerald-600 hover:text-emerald-700 transform hover:scale-110 transition-transform">
                  <Icon size={36} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              Organized by GeeksforGeeks Chapters SNU x SKEPSIS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDSAthon;
