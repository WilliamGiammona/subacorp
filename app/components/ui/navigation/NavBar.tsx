"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            SUBA Properties
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/locations" className="hover:text-gray-600">
              Locations
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Services
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
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
            <Link
              href="/locations"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Locations
            </Link>
            <Link
              href="/services"
              className="block hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Services
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
