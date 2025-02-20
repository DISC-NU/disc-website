"use client";

import { motion } from "framer-motion";
import { Button } from "@/_components/ui/button";
import Safari from "@/_components/ui/safari";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

// const getImagePath = (src: string) => {
//   return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
// };

export function WorkshopSection() {
  return (
    <div className="py-48 mb-24">
      <div className="text-3xl md:text-4xl font-bold text-center px-2 flex flex-col lg:flex-row items-center justify-center">
        <h1 className="">Don&apos;t know how to code? </h1>
        <HeaderWithHighlight highlight={true} green={true}>
          We got you covered
        </HeaderWithHighlight>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        <div className="flex flex-col px-2">
          <p className="text-gray-500 text-md leading-relaxed">
            Join our comprehensive Fall Workshop Series, where we&apos;ll guide
            you through building modern web applications from scratch. Over the
            course of Northwestern&apos;s fall quarter, you&apos;ll learn
            essential full-stack development skills including React, Next.js,
            databases, authentication, and deployment - everything you need to
            bring your ideas to life.
            <br />
            <br />
            Whether you&apos;re a complete beginner or looking to expand your
            coding skills, our hands-on workshops provide a supportive
            environment to learn, practice, and build alongside fellow students
            passionate about technology.
          </p>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#14BD95] hover:bg-[#14BD95]/90 text-white"
              onClick={() =>
                window.open(
                  "https://workshops.discnu.org/",
                  "_blank"
                )
              }
            >
              Learn More About Our Workshops
            </Button>
          </motion.div>
        </div>

        <Safari
          url="https://workshops.discnu.org/"
          className="w-full h-full shadow-2xl"
          src="/workshop_preview.png"
        />
      </div>
    </div>
  );
}
