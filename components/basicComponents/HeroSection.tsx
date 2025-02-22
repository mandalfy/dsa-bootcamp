import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import dateData from "../../dates.json";

const ParticleText = dynamic(() => import("../miniCompo/ParticleTest"), { ssr: false });
const Countdown = dynamic(() => import("./CountDown"), { ssr: false });

const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkSessionStatus = () => {
      const now = new Date();
      
      for (const session of dateData) {
        const sessionStart = new Date(`${session.date}T20:00:00`);
        const sessionEnd = new Date(sessionStart.getTime() + 2 * 60 * 60 * 1000);

        if (now >= sessionStart && now <= sessionEnd) {
          setIsActive(true);
          return;
        }
      }
      setIsActive(false);
    };
    
    checkSessionStatus();
    const interval = setInterval(checkSessionStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-4 sm:px-8 md:px-12">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r animate-[gradientAnimation_6s_infinite_alternate] opacity-90"
        style={{
          backgroundSize: "200% 200%",
          backgroundImage:
            "linear-gradient(90deg, hsla(100, 80%, 45%, 1) 0%, hsla(212, 82%, 50%, 1) 100%)",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center space-y-4 mt-2">
        {/* Title with Particle Effect */}
        <ParticleText />

        {/* Event Date */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-1"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.4)" }}
        >
          February 16 - March 23, 2025
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center mt-2">
          <div className="relative z-20 backdrop-blur-lg bg-white/10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <Countdown />
          </div>
        </div>

        {/* Register Button - Active only during session */}
        <div className="mt-4 z-30">
          <a
            href="https://meet.google.com/jxc-vhcy-iaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`mt-3 px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 text-lg sm:text-xl md:text-2xl 
                         font-bold text-white bg-gray-600 rounded-lg 
                         transition-all duration-300 transform hover:scale-110 
                         focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg 
                         hover:shadow-blue-400/50 ${isActive ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isActive}
            >
              Join Session
            </button>
          </a>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
