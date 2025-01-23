"use client";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-xl font-bold hover:opacity-50 transition-opacity"
          >
            SUBA CORPORATION
          </Link>

          <div className="flex items-center gap-8">
            <div className="group relative">
              <button className="hover:cursor-pointer text-lg">
                Locations
              </button>
              <div className="absolute hidden group-hover:block top-full left-0  bg-white dark:bg-gray-800 rounded shadow-lg py-2 w-40 z-50">
                <Link href="/encinitas">
                  <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-lg">
                    Encinitas
                  </div>
                </Link>
                <Link href="/mission-bay">
                  <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-lg">
                    Mission Bay
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/services"
              className="hover:opacity-50 transition-opacity text-lg"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="hover:opacity-50 transition-opacity text-lg"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:opacity-50 transition-opacity text-lg"
            >
              Contact
            </Link>

            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
