"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            <div className="text-xl font-bold">SUBA CORPORATION</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <NavigationMenuLink className="px-4 nav-link-hover inline-flex items-center cursor-pointer">
                        Locations{" "}
                        <ChevronDown className="ml-1 h-4 w-4 translate-y-[2px]" />
                      </NavigationMenuLink>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/locations/encinitas" className="w-full">
                          Encinitas
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/locations/mission-bay" className="w-full">
                          Mission Bay
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 nav-link-hover">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 nav-link-hover">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 nav-link-hover">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform hover:scale-105"
            >
              <Menu
                className={`h-[1.2rem] w-[1.2rem] transition-transform duration-200 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
              />
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-x-0 top-16 bg-gray-100 dark:bg-gray-900 z-50 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/locations/encinitas"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                Locations
              </div>
            </Link>
            <Link
              href="/locations/mission-bay"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="px-8 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                Mission Bay
              </div>
            </Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              <div className="px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                Services
              </div>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <div className="px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                About
              </div>
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <div className="px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
