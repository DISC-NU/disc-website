"use client";
import { useRef, useState, useEffect } from "react";
import HeroTreeMap from "@/_components/HeroTreeMap";
import { Button } from "@/_components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    top: { width: 0, height: 0 },
    bottom: { width: 0, height: 0 },
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (topRef.current && bottomRef.current) {
        setDimensions({
          top: {
            width: topRef.current.clientWidth,
            height: topRef.current.clientHeight,
          },
          bottom: {
            width: bottomRef.current.clientWidth,
            height: bottomRef.current.clientHeight,
          },
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-w-full h-screen flex flex-col overflow-hidden">
      <motion.div
        ref={topRef}
        className="relative w-full h-1/4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white" />
        <HeroTreeMap
          width={dimensions.top.width}
          height={dimensions.top.height}
        />
      </motion.div>
      <div className="relative flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[90rem] text-center space-y-6">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-black md:whitespace-nowrap"
          >
            WELCOME TO
          </motion.h1>

          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.4,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#40B4B4] lg:whitespace-nowrap px-2"
          >
            Develop & Innovate for Social Good
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.6,
            }}
            className="text-base md:text-lg lg:text-xl text-gray-600 lg:whitespace-nowrap px-2"
          >
            Northwestern University's premier hub for tech innovation and social
            impact
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
            className="flex justify-center items-center gap-6"
          >
            <Button
              className="bg-[#40B4B4] hover:bg-[#369999] text-white font-semibold"
              onClick={() =>
                window.open("https://discord.gg/mqRQ7s9CyS", "_blank")
              }
            >
              Join today
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={bottomRef}
        className="relative w-full h-1/4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white" />
        <HeroTreeMap
          width={dimensions.bottom.width}
          height={dimensions.bottom.height}
        />
      </motion.div>
    </div>
  );
}
