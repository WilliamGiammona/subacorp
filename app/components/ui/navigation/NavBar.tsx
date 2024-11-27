"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">SUBA PROPERTIES</div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/properties" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 nav-link-hover">
                      Properties
                    </NavigationMenuLink>
                  </Link>
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
            <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
              <div className="px-4 py-2 text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                Properties
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
