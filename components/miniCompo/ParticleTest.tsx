"use client";

import { color } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import { text } from 'stream/consumers';

const ParticleText = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative group">
      <h1 className="text-7xl font-extrabold text-white px-4 py-2 mb-8"
        style={{ textShadow: '0 10px 20px rgba(0,0,0,0.4)' }}>
        A <span style={{ 
          color: "#1776e6", 
          textShadow: "0.5px 0.5px 0 black, -0.5px -0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black" 
        }}>Skepsis</span> x <span style={{ 
          color: "#55d017", 
          textShadow: "0.5px 0.5px 0 black, -0.5px -0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black" 
        }}>GFG</span> Event
      </h1>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `particle-float-away ${particle.duration}s ease-out ${particle.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes particle-float-away {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          20% {
            opacity: 0.8;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(var(--random-x, 1) * 100px), calc(var(--random-y, 1) * 100px)) scale(0);
          }
        }

        .absolute {
          --random-x: ${() => Math.random() * 4 - 1};
          --random-y: ${() => Math.random() * 4 - 1};
        }
      `}</style>
    </div>
  );
};

export default ParticleText;