"use client"

// Add gradient background styles to body
const gradientStyle = {
  body: {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%", 
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}

import { useState, useEffect } from "react"
import { Menu, Instagram, Twitter, Linkedin, MessageCircle, Code, Users, Clock, BookOpen, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

//Internal imports
import Countdown from "./components/basicComponents/CountDown"
import CurvedTimeline from "./components/basicComponents/CurvedTimeLine"
import HeroSection from "./components/basicComponents/HeroSection"
import FAQSection from "./components/basicComponents/FaqSection"

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ProjectDSAthon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set project start date
  const projectStartDate = new Date("2025-03-01").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = projectStartDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [projectStartDate]) // Added projectStartDate to dependencies


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-green-50/80" />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Timer */}
        {/* <section 
          className="flex items-center justify-center h-screen" 
          style={{
            background: '#11998e',
            background: 'linear-gradient(to right, #38ef7d, #11998e)'
          }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-green-600 to-emerald-600 px-4 py-2 mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300 [text-shadow:_3px_3px_6px_rgba(0,0,0,0.2)] hover:[text-shadow:_5px_5px_10px_rgba(0,0,0,0.3)] [transform-style:preserve-3d] [perspective:1000px] [transform:rotateX(10deg)] hover:[transform:rotateX(0deg)]">
              Welcome to Project DSAthon
            </h1>
            <p className="text-xl mb-12 text-emerald-600 transform [transform-style:preserve-3d] [perspective:1000px] [transform:translateZ(20px)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">
              February 16 - March 23, 2025
            </p>
            <div className="flex justify-center items-center">
              <Countdown />
            </div>
          </div>
        </section> */}

        <div id="hero">
          <HeroSection />
        </div>

        {/* Project Tracks Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">JOIN US ON DSA-THON</h2>
            
            <p className="text-2xl mb-12 text-gray-600 font-medium">
              
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <Calendar size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Weekend Live Sessions</h3>
                <p className="text-gray-600 text-lg">
                  Mentor-led interactive sessions covering essential Linear DSA concepts like Arrays, Linked Lists, Stacks, Queues, and more.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <BookOpen size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Practice & Reinforcement</h3>
                <p className="text-gray-600 text-lg">
                  Solve 35+ beginner-friendly coding problems from various platforms to strengthen problem-solving skills.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <CheckCircle size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Confidence to Progress</h3>
                <p className="text-gray-600 text-lg">
                  Build a strong DSA foundation, making it easier to transition to advanced topics and interview prep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section id="timeline" className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">Project Timeline</h2>
            <p className="text-2xl mb-12 text-gray-600 animate-slide-up font-medium">
              Key milestones for Project DSAthon
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 1</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    16th FEB, Sunday
                  </time>
                  <p className="text-gray-600">Orientation + Array</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 2</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    17th FEB, Monday
                  </time>
                  <p className="text-gray-600">Strings</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 3</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22nd FEB, Saturday
                  </time>
                  <p className="text-gray-600">Searching + Problem Practice</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 4</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    23rd FEB, Sunday
                  </time>
                  <p className="text-gray-600">Basic Recursion</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 5</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    16th MAR, Sunday
                  </time>
                  <p className="text-gray-600">Stack</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 6</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    17th MAR, Monday
                  </time>
                  <p className="text-gray-600">Queue</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 7</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22nd MAR, Saturday
                  </time>
                  <p className="text-gray-600">Linked List - Part 1</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 8</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    23rd MAR, Sunday
                  </time>
                  <p className="text-gray-600">Linked List - Part 2</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section> */}

        <div id="timeline">
          <CurvedTimeline />
        </div>

        {/* Prerequisites Section */}
        <section id="setup" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-12 text-center animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">Prerequisites & Setup</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-green-600">Required Tools</h3>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://code.visualstudio.com/" target="_blank">
                      <span className="text-lg cursor-pointer">Visual Studio Code</span>
                    </a>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://git-scm.com/downloads" target="_blank">
                      <span className="text-lg cursor-pointer">Git Bash</span>
                    </a>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://sourceforge.net/projects/mingw/" target="_blank">
                      <span className="text-lg cursor-pointer">MinGW</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-green-600">Required Accounts</h3>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://github.com/" target="_blank">
                      <span className="text-lg cursor-pointer">GitHub Account</span>
                    </a>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://www.geeksforgeeks.org/" target="_blank">
                      <span className="text-lg cursor-pointer">GeeksforGeeks Account</span>
                    </a>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <a href="https://leetcode.com/" target="_blank">
                      <span className="text-lg cursor-pointer">LeetCode</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

         {/* Learning Resources Section */}
         <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)] text-center">Pre-requisite Resources</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Essential learning materials and video tutorials to help you prepare for the challenge.
            </p>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-600">Basic C++ Commands</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Understanding of Basic C++ Commands
                </p>
                <a href="https://www.youtube.com/watch?v=EAR7De6Goz4&t=250s" className="inline-block text-green-600 hover:text-green-700 text-lg font-semibold hover:underline" target="_blank">Watch Video →</a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-600">Data Structures Basics</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Introduction to fundamental data structures concepts.
                </p>
                <a href="https://www.youtube.com/watch?v=rlZpZ8es_6k&list=PLqM7alHXFySF7JxK9E24C-ZeNAXFB1u8k" className="inline-block text-green-600 hover:text-green-700 text-lg font-semibold hover:underline" target="_blank">Watch Video →</a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-600">Algorithm Analysis</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Learn about time complexity and algorithm efficiency.
                </p>
                <a href="https://www.youtube.com/watch?v=jOMxKsUd6e0" className="inline-block text-green-600 hover:text-green-700 text-lg font-semibold hover:underline" target="_blank">Watch Video →</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Community Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md] text-center">Join GFG Community</h2>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="https://chat.whatsapp.com/FJX8ucNavszCQlTzYqRPFB"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

            <p className="text-lg text-gray-600">Organized by GeeksforGeeks Chapters SNU x SKEPSIS</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDSAthon

