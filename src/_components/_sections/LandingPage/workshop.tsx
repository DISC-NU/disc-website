"use client";

import { motion } from "framer-motion";
import { Button } from "@/_components/ui/button";
import Safari from "@/_components/ui/safari";

const getImagePath = (src: string) => {
  return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
};

export function WorkshopSection() {
  return (
    <div className="mt-36">
      <h1 className="text-3xl md:text-4xl font-bold text-center px-2">
        Don&apos;t know how to code?{" "}
        <span className="inline-block md:inline-flex relative">
          <span className="relative z-10 text-[#14BD95]">
            We&apos;ve got you covered
          </span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(20, 189, 149, 0.20)",
            }}
          ></span>
        </span>
      </h1>

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
                  "https://disc-fall-2024-workshop-series-website.vercel.app/",
                  "_blank"
                )
              }
            >
              Learn More About Our Workshops
            </Button>
          </motion.div>
        </div>

        <Safari
          url="disc-fall-2024-workshop-series-website.vercel.app"
          className="w-full h-full shadow-2xl"
          src={getImagePath("/workshop_preview.png")}
        />
      </div>
    </div>
  );
}
