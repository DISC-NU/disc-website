"use client";

import { ReactNode, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/_components/ui/navigation-menu";
import { Button } from "@/_components/ui/button";
import MobileMenu from "@/_components/ui/mobile-menu";

const NavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    onClick={onClick}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const getImagePath = (src: string) => {
  return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
};

export default function Header() {
  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        const navHeight = 60;
        const buffer = 264;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navHeight - buffer;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1070px]">
        <nav
          className="rounded-2xl border border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src={getImagePath("/disc_logo.png")}
                alt="DISC Logo"
                width={40}
                height={40}
                unoptimized
              />
              <Link
                href="/"
                className="flex flex-shrink-0 items-center"
                aria-label="DISC Logo"
              >
                <div className="text-2xl font-bold">DISC</div>
              </Link>
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <NavigationMenu>
                  <NavigationMenuList className="text-black/60 dark:text-gray-500">
                    <NavItem
                      href="#about"
                      onClick={(e) => scrollToSection(e, "intro")}
                    >
                      About
                    </NavItem>
                    <NavItem
                      href="#features"
                      onClick={(e) => scrollToSection(e, "features")}
                    >
                      What We Do
                    </NavItem>
                    <NavItem
                      href="#projects"
                      onClick={(e) => scrollToSection(e, "projects")}
                    >
                      Projects
                    </NavItem>
                    <NavItem
                      href="#team"
                      onClick={(e) => scrollToSection(e, "team")}
                    >
                      Team
                    </NavItem>
                    <NavItem
                      href="#faq"
                      onClick={(e) => scrollToSection(e, "faq")}
                    >
                      FAQ
                    </NavItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link
                  href="https://disc-fall-2024-workshop-series-website.vercel.app/"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Workshop Series
                </Link>
                <Button className="bg-[#40B4B4] hover:bg-[#369999] text-white font-semibold">
                  <a href="https://discord.gg/mqRQ7s9CyS">Join DISC</a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}