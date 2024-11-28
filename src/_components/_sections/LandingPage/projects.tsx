"use client";

import { motion } from "framer-motion";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import Iphone15Pro from "@/_components/ui/iphone-15-pro";

const getImagePath = (src: string) => {
  return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
};

export function ClientProjectsSection() {
  return (
    <div id="projects" className="mt-36">
      <HeaderWithHighlight highlight={true}>
        Previous Client Projects
      </HeaderWithHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        <div className="flex flex-col px-2">
          <p className="text-gray-500 text-md leading-relaxed">
            Our project portfolio showcases the diverse range of solutions
            we&apos;ve developed for our community partners. One of our notable
            projects is Books & Breakfast, a mobile application designed to
            streamline operations for a local before-school program that
            provides nutritious meals and academic support to elementary school
            students.
            <br />
            <br />
            Through close collaboration with program staff and volunteers, we
            created an intuitive interface that helps track attendance, manage
            meal planning, and coordinate volunteer schedules - making it easier
            for the organization to focus on what matters most: supporting young
            learners in our community.
          </p>
        </div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="w-[320px] relative">
            <div className="absolute inset-0 transform scale-[1.02]" />
            <Iphone15Pro
              width={240}
              height={489}
              src={getImagePath("/books_and_breakfast.png")}
              className="w-full relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
