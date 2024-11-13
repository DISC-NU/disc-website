"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    children,
  }: {
    href: string;
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
                          <MobileNavItem href="/">Home</MobileNavItem>
                          <MobileNavItem href="/about">About</MobileNavItem>
                          <MobileNavItem href="/docs">
                            Documentation
                          </MobileNavItem>
                          <MobileNavItem href="/blog">Blog</MobileNavItem>
                          <MobileNavItem href="/faq">FAQ</MobileNavItem>
                          <MobileNavItem href="/changelog">
                            Changelog
                          </MobileNavItem>
                          <MobileNavItem href="https://github.com/yourusername">
                            GitHub
                          </MobileNavItem>
                        </div>
                      </motion.ul>
                    </nav>
                  </div>
                  <div className="flex flex-col mt-auto gap-4 border-t pt-6">
                    <Link href="https://disc-fall-2024-workshop-series-website.vercel.app/">
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
