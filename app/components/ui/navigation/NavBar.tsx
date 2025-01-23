"use client";

import { Menu, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            SUBA Corporation
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="hover:text-gray-600 flex items-center">
                Locations
              </button>
              <div className="hidden group-hover:block absolute left-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  <Link
                    href="/solana-beach"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mercado Del Sol
                  </Link>
                  <Link
                    href="/mission-bay"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mission Bay Center
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Legal
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
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
            <div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Locations
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </button>
              {isDropdownOpen && (
                <div className="pl-8 space-y-2">
                  <Link
                    href="/solana-beach"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Solana Beach
                  </Link>
                  <Link
                    href="/mission-bay"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Mission Bay
                  </Link>
                </div>
              )}
            </div>

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
            <Link
              href="/services"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Legal
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
