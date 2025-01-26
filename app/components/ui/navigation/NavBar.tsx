"use client";

import { Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/app/components/ui/mode-toggle";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-bold text-xl">SUBA Corporation</h1>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-600 text-lg">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-gray-600 flex items-center text-lg">
                Locations
              </button>
              <div className="hidden group-hover:block absolute left-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  <Link
                    href="/solana-beach"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mercado Del Sol
                  </Link>
                  <Link
                    href="/mission-bay"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mission Bay Center
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="hover:text-gray-600 text-lg">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 text-lg">
              Contact
            </Link>
            <Link href="/legal" className="hover:text-gray-600 text-lg">
              Legal
            </Link>
            <ModeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Home
            </Link>
            <div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Locations
              </button>
              {isDropdownOpen && (
                <div className="pl-8 space-y-2">
                  <Link
                    href="/encinitas"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Mercado Del Sol
                  </Link>
                  <Link
                    href="/mission-bay"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Mission Bay Center
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/legal"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Legal
            </Link>
            <Link
              href="/about"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Contact
            </Link>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
