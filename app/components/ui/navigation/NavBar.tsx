import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function NavBar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-16 items-center py-4 sm:py-0">
          <div className="text-xl font-bold mb-4 sm:mb-0">SUBA PROPERTIES</div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
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
        </div>
      </div>
    </nav>
  );
}
