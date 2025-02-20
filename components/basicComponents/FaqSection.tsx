import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the DSA Bootcamp?",
      answer: "The DSA Bootcamp is a structured learning program by SKEPSIS x GFG-SNU aimed at strengthening your core understanding of Data Structures & Algorithms."
    },
    {
      question: "Is this an interview prep program?",
      answer: "No, this bootcamp focuses on building a strong problem-solving mindset and foundational DSA concepts, not direct interview preparation."
    },
    {
      question: "How does the Bootcamp work?",
      answer: "The bootcamp includes weekend live mentor-led sessions covering essential Linear DSA concepts and weekday practice problems to reinforce learning."
    },
    {
      question: "What topics will be covered?",
      answer: "The bootcamp covers Linear DSA topics such as Arrays, Linked Lists, Stacks, Queues, and more, with hands-on problem-solving."
    },
    {
      question: "What are the prerequisites?",
      answer: "A basic understanding of C++ syntax and VS Code installed on your system are recommended before starting the bootcamp."
    },
    {
      question: "How many problems will be solved?",
      answer: "The bootcamp includes solving 35+ problems on various coding platforms, ensuring hands-on experience and practice."
    },
    {
      question: "Where can I find the bootcamp schedule?",
      answer: "You can check out the schedule here: bit.ly/dsa-bootcamp-schedule"
    },
    {
      question: "How can I stay updated?",
      answer: "Join our dedicated WhatsApp group for all important updates and details!"
    }
  ];

  return (
    <section className="py-16 px-4 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent transform transition-all duration-300 hover:scale-105">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Find answers to common questions about the DSA Bootcamp
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-green-700">
                  {faq.question}
                </h3>
                {expandedIndex === index ? (
                  <MinusCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <PlusCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};