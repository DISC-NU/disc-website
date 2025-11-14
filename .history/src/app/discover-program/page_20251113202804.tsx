"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import Link from "next/link";

export default function DiscoverProgramPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-32">
      <div className="space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-center">
          <span className="relative">
            <span className="relative z-10">DISCover Program 2025</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h1>
        <p className="text-gray-500 text-center text-lg">
          Connect, Create, and Make an Impact
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Program Overview</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <div className="space-y-6 text-gray-500">
          <p>
            The Discover Program connects student tech developers with local
            organizations that have software needs. Through this 2-quarter-long
            program, teams of 5-6 students build an industry-grade web
            application from start to finish that solves a critical problem for
            one of our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-[#14BD95] mb-4">
                What You&apos;ll Gain
              </h3>
              <ul className="space-y-3">
                <li>🌟 Make an impact through real-world projects</li>
                <li>💻 Develop technical skills with modern tools</li>
                <li>📝 Boost your resume with tangible experience</li>
                <li>🤝 Work directly with clients and mentors</li>
                <li>👥 Find mentorship from Tech Leads and PMs</li>
                <li>🎉 Build lasting friendships</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-[#14BD95] mb-4">
                Tech Stack
              </h3>
              <ul className="space-y-3">
                <li>📱 Frontend: React, React Router, styled-components</li>
                <li>⚙️ Backend: Node.js, Express, PostgreSQL</li>
                <li>🔐 Auth: Supabase authentication</li>
                <li>🚀 Deployment: Vercel & Supabase</li>
                <li>🎨 Design: Figma</li>
                <li>📊 Version Control: Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Program Timeline</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <ol className="relative border-s border-[#40B4B4]/30">
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">
              Studio Kickoff & Team Formation
            </h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Weeks 3-4
            </time>
            <p className="text-gray-500">
              Get to know your team and start planning your project journey.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">
              Initial Client Meetings
            </h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Week 5
            </time>
            <p className="text-gray-500">
              Meet with your client and understand their needs and expectations.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">
              Winter Development Sprint
            </h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Weeks 6-9
            </time>
            <p className="text-gray-500">
              Begin building your solution with regular check-ins and
              mentorship.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">Winter Showcase</h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Week 10
            </time>
            <p className="text-gray-500">
              Present your progress and gather feedback for the next phase.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">
              Spring Development Sprint
            </h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Weeks 1-8
            </time>
            <p className="text-gray-500">
              Continue development and refinement of your project.
            </p>
          </li>
          <li className="ms-6">
            <div className="absolute w-4 h-4 bg-[#40B4B4] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
            <h3 className="font-semibold text-xl mb-2">
              Final Project Showcase
            </h3>
            <time className="block mb-3 text-sm font-normal text-gray-400">
              Week 9
            </time>
            <p className="text-gray-500">
              Present your completed project to the DISC community and clients.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">How to Apply</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <div className="space-y-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
                Should I apply?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                We welcome students with basic technical knowledge who are eager
                to work on their first real-world development project. If
                you&apos;ve followed our fall workshops or have equivalent
                experience with Figma, React, Node, Express, PostgreSQL, and
                Git, you&apos;re well-prepared to contribute to a project team!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
                What are we looking for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <ul className="space-y-2">
                  <li>• Willingness to learn and grow</li>
                  <li>• Ability to work effectively in teams</li>
                  <li>• Can-do attitude</li>
                  <li>• Basic technical experience or workshop knowledge</li>
                  <li>• Workshop attendance is a plus!</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Application Timeline</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#40B4B4]/10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                <div className="w-3 h-3 bg-[#40B4B4] rounded-full"></div>
              </div>
              <div className="hidden sm:flex w-full bg-[#40B4B4]/20 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900">Apply</h3>
              <time className="block mb-2 text-sm font-normal text-gray-400">
                11/26/24 - 1/3/26
              </time>
              <p className="text-base font-normal text-gray-500">
                Submit your application by 11:59pm CST on January 4th, 2025
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#40B4B4]/10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                <div className="w-3 h-3 bg-[#40B4B4] rounded-full"></div>
              </div>
              <div className="hidden sm:flex w-full bg-[#40B4B4]/20 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900">Interview</h3>
              <time className="block mb-2 text-sm font-normal text-gray-400">
                1/6/25 - 1/17/25
              </time>
              <p className="text-base font-normal text-gray-500">
                Informal discussion about your experience and interests
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 flex-1">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#40B4B4]/10 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                <div className="w-3 h-3 bg-[#40B4B4] rounded-full"></div>
              </div>
              <div className="hidden sm:flex w-full bg-[#40B4B4]/20 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Decisions Released
              </h3>
              <time className="block mb-2 text-sm font-normal text-gray-400">
                1/19/25
              </time>
              <p className="text-base font-normal text-gray-500">
                Appectances will be released alongside team assignments
              </p>
            </div>
          </li>
        </ol>
      </section>

      <div className="relative py-16">
        <div className="relative mx-auto max-w-4xl flex flex-col items-center px-6 text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#297777] to-[#40B4B4] mb-4">
              Ready to make an impact?
            </h2>
            <p className="text-gray-500 text-lg">
              Take the first step towards building impactful projects
            </p>
          </div>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4pbbl1mhY8FhfFzGnw-t0HXvJGpOAflLzF3zvYgcYUNUh0Q/viewform"
            target="_blank"
            className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#297777] to-[#40B4B4] px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#246666] hover:to-[#35A3A3]"
          >
            Apply Now
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <div className="mt-8 space-y-2">
            <p className="text-gray-500">
              Questions? Contact us at{" "}
              <a
                href="mailto:disc@u.northwestern.edu"
                className="text-[#40B4B4] hover:underline font-medium"
              >
                disc@u.northwestern.edu
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
                <span>5-10 minute application</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
                <span>Applications due Jan 4th</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}