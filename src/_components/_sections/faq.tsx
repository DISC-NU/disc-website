"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="mt-36 flex justify-center px-4">
      <motion.div
        className="max-w-4xl w-full"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <h2 className="text-4xl font-bold text-center">
          <span className="relative">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <AccordionItem
                value={`item-${item}`}
                className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item === 1 && "How can I join DISC?"}
                  {item === 2 && "What kind of projects do you work on?"}
                  {item === 3 && "Do I need prior coding experience?"}
                  {item === 4 && "What is the time commitment?"}
                  {item === 5 && "Can I propose my own project?"}
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden text-gray-500 text-md data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {item === 1 &&
                    "We welcome new members at the beginning of each quarter! Keep an eye on our social media and website for recruitment announcements. We have an application process where we look for students who are passionate about using technology for social impact, regardless of their technical background."}
                  {item === 2 &&
                    "We partner with local organizations to develop technology solutions that address real community needs. Our projects range from web applications and mobile apps to data analysis tools. Each project focuses on creating meaningful social impact while providing valuable learning experiences for our members."}
                  {item === 3 &&
                    "While some basic programming knowledge is helpful, we welcome members with varying levels of experience. What's most important is your enthusiasm to learn and contribute. We provide mentorship and support to help you develop your technical skills while working on projects."}
                  {item === 4 &&
                    "Members typically dedicate 3-5 hours per week to DISC activities. This includes team meetings, working on projects, and participating in community events. We understand that students have varying schedules, so we try to be flexible while ensuring consistent progress on our projects."}
                  {item === 5 &&
                    "Absolutely! We encourage members to bring their innovative ideas to the table. If you have a project concept that aligns with our mission of technology for social good, we'll help you develop it and potentially form a team to bring it to life."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}