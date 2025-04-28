"use client";
import React from "react";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import { Button } from "@/_components/ui/button";
import { motion } from "framer-motion";
import { Code, Users, Rocket, Clock } from "lucide-react";

const ClientPage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description:
        "Custom, responsive web applications built with modern technologies like React and Node.js. Our solutions are scalable, maintainable, and designed for real-world use.",
    },
    {
      icon: Users,
      title: "Dedicated Development Teams",
      description:
        "A team of 5-6 passionate student developers, including a dedicated UI/UX designer and project manager, working closely with you throughout the development process.",
    },
    {
      icon: Rocket,
      title: "End-to-End Solutions",
      description:
        "From initial concept to final deployment, we handle the complete development lifecycle, including user authentication, database design, and hosting setup.",
    },
    {
      icon: Clock,
      title: "Long-term Partnership",
      description:
        "Two-quarter commitment to your project, ensuring thorough development, testing, and handoff of your solution with comprehensive documentation.",
    },
  ];

  const testimonials = [
    {
      quote:
        "DISC delivered a mobile application that streamlined our operations and helped us better serve elementary school students in our before-school program.",
      author: "Books & Breakfast Program",
      role: "Education Non-profit Partner",
    },
    {
      quote:
        "The team's technical expertise combined with their genuine interest in our mission made them perfect partners for our technology needs.",
      author: "Local Community Organization",
      role: "Non-profit Partner",
    },
  ];

  return (
    <div className="w-full">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <HeaderWithHighlight highlight={true}>
            Partner with DISC
          </HeaderWithHighlight>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            We help non-profits and social enterprises build impactful
            technology solutions at no cost. Our student teams bring fresh
            perspectives and modern technical expertise to solve your
            challenges.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-[#14BD95] hover:bg-[#14BD95]/90 text-white"
            onClick={() => window.open("mailto:disc@u.northwestern.edu")}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <HeaderWithHighlight highlight={true} center={true} className="mb-16">
            What We Offer
          </HeaderWithHighlight>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#14BD95]/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-[#14BD95]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <HeaderWithHighlight highlight={true} center={true} className="mb-16">
            Our Development Process
          </HeaderWithHighlight>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  1. Initial Consultation
                </h3>
                <p className="text-gray-500">
                  We begin with a thorough discussion of your
                  organization&apos;s needs, challenges, and goals. This helps
                  us understand how technology can best serve your mission.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-[#14BD95]/10 p-8 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Expect:</h4>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Needs assessment discussion</li>
                    <li>• Technical feasibility evaluation</li>
                    <li>• Timeline and scope planning</li>
                    <li>• Team matching based on project needs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-[#14BD95]/10 p-8 rounded-lg">
                  <h4 className="font-semibold mb-2">Development Phases:</h4>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Design and prototyping</li>
                    <li>• Iterative development</li>
                    <li>• Regular progress updates</li>
                    <li>• Continuous feedback integration</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">
                  2. Development & Implementation
                </h3>
                <p className="text-gray-500">
                  Our team works closely with you throughout the two-quarter
                  development period, ensuring the solution meets your needs
                  through regular check-ins and demonstrations.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  3. Delivery & Support
                </h3>
                <p className="text-gray-500">
                  We ensure a smooth transition with comprehensive
                  documentation, training, and support to help your team
                  effectively use and maintain the solution.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-[#14BD95]/10 p-8 rounded-lg">
                  <h4 className="font-semibold mb-2">Deliverables Include:</h4>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Fully tested application</li>
                    <li>• User documentation</li>
                    <li>• Technical documentation</li>
                    <li>• Training and handoff support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <HeaderWithHighlight highlight={true} center={true} className="mb-16">
            Client Testimonials
          </HeaderWithHighlight>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="mb-4 text-[#14BD95]">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Impactful?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Let&apos;s discuss how we can help bring your ideas to life and
            create positive change in your community.
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-[#14BD95] hover:bg-[#14BD95]/90 text-white"
              onClick={() => window.open("mailto:disc@u.northwestern.edu")}
            >
              Contact Us
            </Button>
            <p className="text-gray-500">
              or email us at{" "}
              <a
                href="mailto:disc@u.northwestern.edu"
                className="text-[#14BD95] hover:underline"
              >
                disc@u.northwestern.edu
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientPage;
