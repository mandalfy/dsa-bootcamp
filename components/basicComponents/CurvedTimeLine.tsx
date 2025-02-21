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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          YOUR JOURNEY TO MASTERING DATA STRUCTURES & ALGORITHMS
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
              <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg">
                <span className="text-lg font-bold text-white">{index + 1}</span>
              </div>

              <div className="flex-1 group flex justify-between items-center bg-white p-6 rounded-2xl shadow-xl border border-green-400">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {event.session}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-700 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>2 Hours</span>
                    </div>
                  </div>
                  <p className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    {event.topic}
                  </p>
                </div>

                <div className="text-center font-semibold">
                  <p className="text-sm text-gray-500">Speaker:</p>
                  <p className="text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    {event.speaker}
                  </p>
                </div>
              </div>
            </div>

            {index !== timelineEvents.length - 1 && (
              <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
