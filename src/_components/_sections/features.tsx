"use client";
import { motion } from "framer-motion";
import { Code, Rocket, Users } from "lucide-react";
import { FeatureCard } from "@/_components/ui/feature-card";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

const features = [
  {
    icon: Code,
    title: "Enhance your problem-solving skills through coding!",
    description:
      "We provide a supportive environment where members learn to tackle challenges step-by-step. Break down problems, brainstorm solutions, implement code, and reach effective solutions alongside a vibrant community of like-minded individuals.",
  },
  {
    icon: Rocket,
    title: "Where innovation meets implementation!",
    description:
      "We're passionate about coding and bringing ideas to life through technology. Join us as we dive into the world of software development and explore ways to enact positive change through our code.",
  },
  {
    icon: Users,
    title: "Join our dynamic club and make a difference!",
    description:
      "Our community is dedicated to driving social impact and community engagement through leadership at every level. Whether you're a project manager, tech lead, or general member, there's a role for you.",
  },
];

export function FeaturesSection() {
  return (
    <div className="mt-16">
      <HeaderWithHighlight>What We Do</HeaderWithHighlight>

      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </motion.div>
    </div>
  );
}
