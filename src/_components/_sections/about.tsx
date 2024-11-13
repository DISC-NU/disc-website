"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Rocket, Code, Users } from "lucide-react";
import Safari from "@/components/ui/safari";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="mt-36 flex flex-col items-center px-4 py-12">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold whitespace-nowrap text-center">
            At DISC, we build{" "}
            <span className="inline-flex relative">
              <span className="relative z-10 text-[#14BD95]">
                technology for social good
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

          <p className="mt-4 max-w-4xl text-gray-500 text-md leading-relaxed mx-auto py-4">
            Since 2017, DISC has been transforming how Northwestern students
            engage with technology and community impact. What started as a small
            student group has grown into a dynamic community of innovators,
            bringing together diverse perspectives and skills to tackle
            real-world challenges.
            <br />
            <br />
            We believe in the power of collaboration across disciplines. By
            combining technical expertise with creative problem-solving, we've
            built lasting partnerships with organizations throughout the
            Evanston/Chicago area. Our project teams blend computer science,
            design, and social impact to create solutions that matter.
          </p>
        </div>

        <div className="mt-16 flex flex-col">
          <h2 className="text-4xl font-bold text-center">
            <span className="relative text-center">
              <span className="relative z-10">Our Impact</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Through hands-on projects and mentorship, we empower students to
            grow beyond the classroom. Our teams work directly with community
            partners, gaining real-world experience while making a meaningful
            difference. We're proud to foster an environment where technical
            innovation meets social responsibility, creating technology
            solutions that serve our community's needs.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="relative">
              <span className="relative z-10">What We Do</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#14BD95]/10 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-[#14BD95]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Enhance your problem-solving skills through coding!
                  </h3>
                </CardHeader>
                <CardContent className="text-gray-500 text-md">
                  We provide a supportive environment where members learn to
                  tackle challenges step-by-step. Break down problems,
                  brainstorm solutions, implement code, and reach effective
                  solutions alongside a vibrant community of like-minded
                  individuals.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#14BD95]/10 flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-[#14BD95]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Where innovation meets implementation!
                  </h3>
                </CardHeader>
                <CardContent className="text-gray-500 text-md">
                  We're passionate about coding and bringing ideas to life
                  through technology. Join us as we dive into the world of
                  software development and explore ways to enact positive change
                  through our code.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#14BD95]/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#14BD95]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Join our dynamic club and make a difference!
                  </h3>
                </CardHeader>
                <CardContent className="text-gray-500 text-md">
                  Our community is dedicated to driving social impact and
                  community engagement through leadership at every level.
                  Whether you're a project manager, tech lead, or general
                  member, there's a role for you.
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-36">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Don't know how to code?{" "}
            <span className="inline-flex relative">
              <span className="relative z-10 text-[#14BD95]">
                We got you covered
              </span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <p className="text-gray-500 text-md leading-relaxed">
                Join our comprehensive Fall Workshop Series, where we'll guide
                you through building modern web applications from scratch. Over
                the course of Northwestern's fall quarter, you'll learn
                essential full-stack development skills including React,
                Next.js, databases, authentication, and deployment - everything
                you need to bring your ideas to life.
                <br />
                <br />
                Whether you're a complete beginner or looking to expand your
                coding skills, our hands-on workshops provide a supportive
                environment to learn, practice, and build alongside fellow
                students passionate about technology.
              </p>

              <motion.div
                className="mt-8"
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

            <div className="aspect-[16/9] w-full">
              <Safari
                url="disc-fall-2024-workshop-series-website.vercel.app"
                className="w-full h-full shadow-2xl"
                src="/workshop_preview.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
