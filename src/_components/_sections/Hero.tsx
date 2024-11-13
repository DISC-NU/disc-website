"use client";

import React, { useRef, useState, useEffect } from "react";
import HeroTreeMap from "@/_components/HeroTreeMap";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-w-full h-screen flex">
      <div className="w-1/2 h-full p-8 flex flex-col justify-center items-center">
        <div className="max-w-lg text-left">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#40B4B4]"
          >
            DISC NU
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
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8"
          >
            A Northwestern University community dedicated to Designing &
            Innovating for Social Change
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
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
        ref={containerRef}
        className="w-1/2 h-5/6 my-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <HeroTreeMap width={dimensions.width} height={dimensions.height} />
      </motion.div>
    </div>
  );
}
