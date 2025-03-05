"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/_components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
} from "@/_components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();

      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
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
            setIsOpen(false);
          }
        }, 100);
      } else {
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
          setIsOpen(false);
        }
      }
    },
    [pathname, router]
  );

  const listItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const sheetVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", bounce: 0, duration: 0.3 },
    },
    open: { x: 0, transition: { type: "spring", bounce: 0, duration: 0.4 } },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const MobileNavItem = ({
    href,
    onClick,
    children,
  }: {
    href: string;
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode;
  }) => (
    <motion.li
      variants={listItemVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-md py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary-300/10"
      >
        {children}
      </Link>
    </motion.li>
  );

  return (
    <div className="block md:hidden">
      <Sheet onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-md hover:bg-secondary-300/10"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              <SheetPortal>
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sheetVariants}
                  className="fixed inset-y-0 right-0 z-50 flex h-full w-[300px] flex-col justify-between border-l bg-background p-6 shadow-lg sm:w-[400px]"
                >
                  <div>
                    <SheetHeader className="mb-8">
                      <SheetTitle className="text-center text-2xl">
                        DISC
                      </SheetTitle>
                    </SheetHeader>
                    <nav aria-label="Mobile menu">
                      <motion.ul
                        className="space-y-1"
                        variants={containerVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                      >
                        <div className="space-y-1">
                          <MobileNavItem
                            href="/#about"
                            onClick={(e) => handleNavigation(e, "intro")}
                          >
                            About
                          </MobileNavItem>
                          <MobileNavItem
                            href="/#features"
                            onClick={(e) => handleNavigation(e, "features")}
                          >
                            What We Do
                          </MobileNavItem>
                          <MobileNavItem
                            href="/#projects"
                            onClick={(e) => handleNavigation(e, "projects")}
                          >
                            Projects
                          </MobileNavItem>
                          <MobileNavItem
                            href="/#team"
                            onClick={(e) => handleNavigation(e, "team")}
                          >
                            Team
                          </MobileNavItem>
                          <MobileNavItem
                            href="/#faq"
                            onClick={(e) => handleNavigation(e, "faq")}
                          >
                            FAQ
                          </MobileNavItem>
                        </div>
                      </motion.ul>
                    </nav>
                  </div>
                  <div className="flex flex-col mt-auto gap-4 border-t pt-6">
                    <Link href="/discover-program">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-base"
                      >
                        DISCover Program
                      </Button>
                    </Link>
                    <Link href="/executive-board">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-base"
                      >
                        Executive Board Applications
                      </Button>
                    </Link>
                    <Link href="https://workshops.discnu.org/">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-base"
                      >
                        Workshop Series
                      </Button>
                    </Link>
                    <Link href="https://discord.gg/mqRQ7s9CyS">
                      <Button className="w-full justify-center bg-[#40B4B4] hover:bg-[#369999] text-white font-semibold text-base">
                        Join DISC
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </SheetPortal>
            </>
          )}
        </AnimatePresence>
      </Sheet>
    </div>
  );
}
