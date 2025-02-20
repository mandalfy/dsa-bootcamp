import React from 'react';
import { Calendar, Book, Search, Code, Database, List } from 'lucide-react';

export default function CourseSchedule() {
  const sessions = [
    {
      date: "16th FEB, Sunday",
      topic: "ORIENTATION + ARRAYS",
      speaker: "PRITAM PAUL",
      content: [
        "Introduction to Array Data Structure",
        "Arrays Creation",
        "Input, Output and Update",
        "Arrays as Function Arguments"
      ],
      problems: [
        "Largest Element",
        "Reverse an Array",
        "Pairs in an Array",
        "Print SubArrays",
        "Check if an Array is Sorted or not"
      ],
      icon: <List className="w-6 h-6" />
    },
    {
      date: "17th FEB, Monday",
      topic: "STRINGS",
      speaker: "TUNIR ADHUKARY",
      content: [
        "Introduction to String",
        "Difference between String & Char array",
        "String Inbuilt Functions",
        "Basic Idea of MAP - SET"
      ],
      problems: [
        "String size, isalnum - isalpha - toupper - tolower - string::npos uses, string - '0'=int",
        "Reverse a String",
        "Check if a String is Palindrome",
        "Count the Number of Vowels and Consonants",
        "Count Number of Words in a string",
        "Print the words in the String which starts with a vowel",
        "Find the Longest Word in a Sentence"
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      date: "23rd FEB, Sunday",
      topic: "SEARCHING",
      speaker: "SOHAM MONDAL",
      content: [
        "Linear Search Explanation",
        "Leetcode Problem as an example",
        "Time Complexity Analysis",
        "Binary Search explanation",
        "Leetcode problem as an example (Basic Binary Search)",
        "Time Complexity Analysis",
        "Comparison of Linear Search and Binary Search",
        "Problems on Search Space: Book Allocation, Aggressive Cows, Flower Bouquet"
      ],
      icon: <Search className="w-6 h-6" />
    },
    {
      date: "16th MAR, Sunday",
      topic: "STACK",
      speaker: "RIYA GUPTA",
      content: [
        "Stack explanation",
        "Implementation of Stack",
        "Time complexity analysis",
        "Problem Solving based on the above data structure",
        "Monotonic Stack"
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      date: "17th MAR, Monday",
      topic: "QUEUE",
      speaker: "RIYA GUPTA",
      content: [
        "Queue, Dequeue Explanation",
        "Implementation of Queue, Dqueue",
        "Time complexity analysis",
        "Problem Solving based on the above data structure",
        "Problems on CPU Scheduling"
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      date: "22nd MAR, Saturday",
      topic: "POINTERS AND LINKED-LIST BASICS",
      speaker: "SOHOOMLAL BANNERJEE",
      content: [
        "Pointers",
        "Basics of Singly Linked Lists",
        "Stack and Queue Implementation Using Linked Lists",
        "Different Types of Linked Lists"
      ],
      icon: <Book className="w-6 h-6" />
    },
    {
      date: "23rd MAR, Sunday",
      topic: "ADVANCED PROBLEMS ON RECURSIONS",
      speaker: "SOHOOMLAL BANNERJEE",
      content: [
        "Problem-Solving Techniques",
        "Pointer Manipulation and Traversal Strategies",
        "Cycle Detection Using Optimized Techniques",
        "Various Problem-Solving Approaches on Linked Lists"
      ],
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1776e6]">
        Course Schedule
      </h1>
      
      <div className="grid gap-8 max-w-6xl mx-auto">
        {sessions.map((session, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4"
            style={{ borderLeftColor: index % 2 === 0 ? '#55d017' : '#1776e6' }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-semibold text-gray-600">
                  {session.date}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                {session.icon}
                <h2 className="text-2xl font-bold text-[#1776e6]">
                  {session.topic}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Speaker:</span> {session.speaker}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#55d017] mb-2">
                    Content
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {session.content.map((item, idx) => (
                      <li key={idx} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {session.problems && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#55d017] mb-2">
                      Problems
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {session.problems.map((problem, idx) => (
                        <li key={idx} className="text-gray-700">{problem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};