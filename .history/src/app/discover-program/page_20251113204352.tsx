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
            <span className="relative z-10">Discover Program 2025</span>
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
          <p className="text-base leading-relaxed">
            The Discover Program connects student tech developers with local
            organizations that have software needs. Through this 2-quarter-long
            program, teams of 5-6 students build an industry-grade web
            application from start to finish that solves a critical problem for
            one of our clients. All of the clients we work with are local
            nonprofits or startups, making this a great opportunity to give back
            to the community while gaining technical experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#14BD95] mb-4">
                What You&apos;ll Gain
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🌟</span> Make an impact through
                  real-world projects
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">💻</span> Develop technical skills
                  with modern tools
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🤝</span> Work directly with clients
                  and mentors
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">👥</span> Find mentorship and
                  companionship in the DISC community
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">💪</span> Develop critical soft
                  skills through team collaboration
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">📝</span> Boost your resume with
                  impactful projects
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🎯</span> Get real-world software
                  development experience
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🎉</span> Build lasting friendships
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#14BD95] mb-4">
                Tech Stack
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🎨</span> Design: Figma
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">📱</span> Frontend: React, React
                  Router, styled-components
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">⚙️</span> Backend: Node.js, Express,
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🔐</span> Auth: Supabase
                  authentication
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">🚀</span> Deployment: Vercel &
                  Supabase
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">📊</span> Version Control: Git &
                  GitHub
                </li>
                <li className="flex items-center gap-2 text-base">
                  <span className="text-xl">💻</span> IDE: VSCode (+ Neovim
                  optional)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Program Requirements</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-[#14BD95] mb-4">
            Participation Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500">
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">⏰</span>
              <span>Minimum 3, average 5 hours per week commitment</span>
            </div>
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">📍</span>
              <span>Mandatory weekly studio (Mondays 7-8pm)</span>
            </div>
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">🎯</span>
              <span>Must prioritize DISC above most other commitments</span>
            </div>
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">🤝</span>
              <span>Regular team and client communication</span>
            </div>
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">🎭</span>
              <span>Attend Winter and Spring Showcases</span>
            </div>
            <div className="flex items-start gap-2 text-base">
              <span className="text-xl shrink-0">💪</span>
              <span>Take initiative and help teammates</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-base lg:col-span-3">
              <span className="text-xl shrink-0">📢</span>
              <span>Be vocal about issues and seek help when needed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Team Roles</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">👔</span>
              <h3 className="text-lg font-semibold text-[#14BD95]">
                Product Manager
                <span className="block text-xs text-gray-400 font-normal mt-1">
                  1 per team
                </span>
              </h3>
            </div>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Regular client
                communication and meetings
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Team-exec liaison and
                progress tracking
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Schedule and lead
                weekly team meetings
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Set agendas and
                delegate tasks
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Ensure project
                completion and handoff
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎨</span>
              <h3 className="text-lg font-semibold text-[#14BD95]">
                UI/UX Designer
                <span className="block text-xs text-gray-400 font-normal mt-1">
                  1 per team
                </span>
              </h3>
            </div>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Design the application
                from scratch
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Iterate based on
                client and team feedback
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Ensure built interface
                matches design
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Communicate design
                updates to stakeholders
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Contribute to frontend
                development
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2 md:w-2/3 md:mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-semibold text-[#14BD95]">
                Engineers
                <span className="block text-xs text-gray-400 font-normal mt-1">
                  3-4 per team
                </span>
              </h3>
            </div>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Build and own features
                end-to-end
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Focus on frontend,
                backend, or full stack
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Write high-quality,
                maintainable code
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Learn and implement
                new technologies
              </li>
              <li className="flex items-start gap-2 text-base">
                <span className="text-[#14BD95]">•</span> Collaborate on
                technical decisions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 py-16">
        <h2 className="text-3xl font-bold mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                1
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Winter Quarter Kickoff
              </h3>
              <p className="text-base text-gray-400">Winter Quarter - Week 3</p>
              <p className="text-base text-gray-500 mt-1">
                Program kickoff event and preparation for client meetings
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                2
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Initial Client Meetings
              </h3>
              <p className="text-base text-gray-400">Winter Quarter - Week 4</p>
              <p className="text-base text-gray-500 mt-1">
                Meet with clients to understand project requirements
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                3
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Winter Development
              </h3>
              <p className="text-base text-gray-400">
                Winter Quarter - Weeks 5-9
              </p>
              <p className="text-base text-gray-500 mt-1">
                Active development with weekly checkpoints
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                4
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Winter Showcase
              </h3>
              <p className="text-base text-gray-400">
                Winter Quarter - Week 10
              </p>
              <p className="text-base text-gray-500 mt-1">
                Present progress and gather feedback
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                5
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Spring Development
              </h3>
              <p className="text-base text-gray-400">
                Spring Quarter - Weeks 1-8
              </p>
              <p className="text-base text-gray-500 mt-1">
                Continue development and refinement
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#40B4B4] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                6
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Final Project Showcase
              </h3>
              <p className="text-base text-gray-400">Spring Quarter - Week 9</p>
              <p className="text-base text-gray-500 mt-1">
                Final presentations to DISC community and clients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="relative">
            <span className="relative z-10">Application Process</span>
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
                <p className="mb-4">
                  The Discover Program is perfect for students looking to get
                  their first taste of real-world tech projects. You don&apos;t
                  need to be an expert - we&apos;re looking for students with
                  basic familiarity with our tech stack who are eager to learn
                  and grow.
                </p>
                <p>
                  If you&apos;ve attended our fall workshops or have equivalent
                  experience, you&apos;re well-prepared to contribute.
                  Don&apos;t hesitate to apply!
                </p>
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
                  <li>• Strong commitment to the program</li>
                  <li>• Team collaboration skills</li>
                  <li>• Basic technical competence</li>
                  <li>• Experience with Git and code editors</li>
                  <li>• Understanding of basic tech stack components</li>
                  <li>• Willingness to learn and grow</li>
                  <li>• Fall workshop participation is a plus!</li>
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
                11/26/24 - 1/4/25
              </time>
              <p className="text-base font-normal text-gray-500">
                Submit your application with fall workshop assignments by
                11:59pm CST
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
                30-minute informal interview with a member of DISC exec team
                regarding your application
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
                Accepted applicants are notified. Project teams and client
                assignments are released
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
              </a>{" "}
              or join our{" "}
              <Link
                href="https://discord.gg/disc"
                className="text-[#40B4B4] hover:underline font-medium"
              >
                DISCord
              </Link>
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
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
                <span>Program runs Winter and Spring quarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}