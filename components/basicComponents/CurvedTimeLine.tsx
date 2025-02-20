import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const timelineEvents = [
  { session: "SESSION 1", date: "16th FEB, Sunday", topic: "Orientation + Array", speaker: "Pritam Paul" },
  { session: "SESSION 2", date: "17th FEB, Monday", topic: "Strings", speaker: "Tunir Adhikary" },
  { session: "SESSION 3", date: "22nd FEB, Saturday", topic: "Searching + Problem Practice", speaker: "Soham Mondal" },
  { session: "SESSION 4", date: "23rd FEB, Sunday", topic: "Basic Recursion", speaker: "Pritam Paul" },
  { session: "SESSION 5", date: "16th MAR, Sunday", topic: "Stack", speaker: "Riya Gupta" },
  { session: "SESSION 6", date: "17th MAR, Monday", topic: "Queue", speaker: "Riya Gupta" },
  { session: "SESSION 7", date: "22nd MAR, Sunday", topic: "Linked List - Part 1", speaker: "Sohoomlal Bannerjee" },
  { session: "SESSION 8", date: "23rd MAR, Monday", topic: "Linked List - Part 2", speaker: "Sohoomlal Bannerjee" },
];

export default function ModernTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-200 animate-gradient text-green-900 py-20 px-6">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-t from-black to-green-400 bg-clip-text text-transparent"
        >
          Your journey to mastering Data Structures & Algorithms
        </motion.h1>
      </div>

      <div className="max-w-5xl mx-auto">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mb-16 last:mb-0"
          >
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-500/20">
                <span className="text-lg font-bold text-white">{index + 1}</span>
              </div>

              <div className="flex-1 group flex justify-between items-center bg-white/90 backdrop-blur-lg rounded-2xl p-6 hover:bg-white transition-all duration-300 border border-green-400 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">{event.session}</h3>
                  <div className="flex items-center gap-4 text-green-600 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>2 Hours</span>
                    </div>
                  </div>
                  <p className="text-green-700">{event.topic}</p>
                </div>

                <div className="text-center text-green-800 font-semibold">
                  <p className="text-sm text-black">Speaker:</p>
                  <p className="text-lg font-bold">{event.speaker}</p>
                </div>
              </div>
            </div>

            {index !== timelineEvents.length - 1 && (
              <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-transparent hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}