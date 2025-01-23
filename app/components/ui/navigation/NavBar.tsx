// NavBar.tsx
"use client";

import { Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            SUBA Properties
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/locations" className="hover:text-gray-600">
              Locations
            </Link>
            <Link href="/services" className="hover:text-gray-600">
              Legal
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
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
          </div>
        )}
      </div>
    </nav>
  );
}
