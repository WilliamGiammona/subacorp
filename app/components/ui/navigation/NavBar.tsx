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
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">SUBA PROPERTIES</div>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/properties" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 relative after:absolute after:bottom-[-8px] after:left-[1rem] after:h-0.5 after:bg-current after:w-0 hover:after:w-[calc(100%-2rem)] after:transition-all">
                      Properties
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 relative after:absolute after:bottom-[-8px] after:left-[1rem] after:h-0.5 after:bg-current after:w-0 hover:after:w-[calc(100%-2rem)] after:transition-all">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 relative after:absolute after:bottom-[-8px] after:left-[1rem] after:h-0.5 after:bg-current after:w-0 hover:after:w-[calc(100%-2rem)] after:transition-all">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 relative after:absolute after:bottom-[-8px] after:left-[1rem] after:h-0.5 after:bg-current after:w-0 hover:after:w-[calc(100%-2rem)] after:transition-all">
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
