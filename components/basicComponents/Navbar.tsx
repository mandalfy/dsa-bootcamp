"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Code, BookOpen, Menu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavLink {
  href: string;
  icon: LucideIcon;
  text: string;
  hoverColor: "pink" | "violet" | "sky";
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "#timeline", icon: Clock, text: "Timeline", hoverColor: "pink" },
    { href: "#setup", icon: Code, text: "Setup", hoverColor: "violet" },
    { href: "#faq", icon: BookOpen, text: "FAQ", hoverColor: "sky" },
    { href: "/courseSchedule", icon: BookOpen, text: "Syllabus", hoverColor: "sky" },
  ];

  const handleMobileMenuClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 backdrop-blur-sm border-b border-emerald-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Main Logo (Shifted to extreme left) */}
        <div className="flex items-center">
          <Link href="/home">
            <Image
              src="/assets/logo.png"
              alt="DSA Bootcamp Logo"
              width={56}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7 ml-auto">
          {navLinks.map(({ href, icon: Icon, text, hoverColor }) => (
            <Link
              key={text}
              href={href}
              className="group flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-all duration-300"
            >
              <Icon className={`w-5 h-5 text-${hoverColor}-500 group-hover:rotate-12 transform transition-all duration-500`} />
              <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300 relative">
                {text}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${hoverColor}-500 group-hover:w-full transition-all duration-300`}></div>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-4 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={handleMobileMenuClick}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-6 space-y-3 border-t border-emerald-500/20 bg-gradient-to-b from-emerald-400/95 via-teal-300/95 to-emerald-400/95 backdrop-blur-lg animate-slide-up rounded-b-2xl shadow-xl">
          {navLinks.map(({ href, icon: Icon, text }) => (
            <Link
              key={text}
              href={href}
              className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-white/20 hover:text-pink-200 rounded-xl transition-all duration-300 group"
              onClick={handleLinkClick}
            >
              <Icon className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform duration-500" />
              <span className="font-semibold">{text}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
