"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenContactModal: () => void;
}

export default function Header({ onOpenContactModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 sm:py-3">
        <div className="container-lg flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="focus:outline-none">
              <Image
                src="/cthoworkwhitetext.png"
                alt="Cthowork Logo"
                width={220}
                height={70}
                className="h-16 sm:h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link href="/our-work" className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group">
              View Our Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          {/* Desktop CTA */}
          <button
            className="hidden md:flex items-center gap-2 bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/25 text-sm"
            onClick={onOpenContactModal}
          >
            Contact us
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/our-work"
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Our Work
              </Link>
              <button
                className="w-full bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/25 text-sm flex items-center justify-center gap-2 mt-4"
                onClick={onOpenContactModal}
              >
                Contact us
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
} 