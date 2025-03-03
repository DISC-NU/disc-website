"use client";
import React, { useState } from "react";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import { Button } from "@/_components/ui/button";
import { motion } from "framer-motion";
import WarningAlert from "@/_components/ui/warning-alert";
import SubheadingWithHighlight from "@/_components/ui/subheading-with-highlight";
import Link from "next/link";
import { Card, CardContent } from "@/_components/ui/card";

export default function ExecApplicationPage() {
  const [activeTab, setActiveTab] = useState("technical-lead");

  const roles = [
    {
      id: "technical-lead",
      title: "Technical Lead",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14BD95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
      timeCommitment: [
        "Fall Quarter: ~5-8 hours a week",
        "Winter/Spring Quarter: 2-3 Hours / Week",
      ],
      lookingFor: [
        "Experience in software development domains",
        "Strong desire and passion for educating others",
        "Ability to serve as a technical leader",
      ],
      responsibilities: [
        "Plan, prepare, and lead fall workshop series",
        "Run Discover Program during Winter and Spring",
        "Lead development of DISC platforms and websites",
        "Attend weekly exec meetings and tech-lead syncs",
        "Maintain DISC GitHub repositories and code templates",
      ],
      whyApply: [
        "Be the core of DISC, responsible for the technical direction of the organization",
        "Freedom to take initiative and try new technologies",
        "Build relationships with members across the organization",
        "Improve your ability to explain complex technical topics",
      ],
    },
    {
      id: "vp-business",
      title: "VP Business Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14BD95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      lookingFor: [
        "Good people skills and enjoys networking",
        "Passion for connecting with non-profits",
        "Interest in supporting DISC's social mission",
      ],
      responsibilities: [
        "Summer & Fall: Reach out to potential clients and manage relationships",
        "Winter & Spring: Engage corporate sponsors",
        "Attend weekly exec meetings",
      ],
      whyApply: [
        "Network with non-profit leaders and industry professionals",
        "Gain experience valuable for tech consulting or product management",
        "Build meaningful relationships that help your career",
      ],
    },
    {
      id: "vp-member",
      title: "VP Member Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14BD95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      timeCommitment: [
        "~2 hours/week during non-event weeks",
        "Additional ~3-4 hours per event",
      ],
      lookingFor: [
        "Enthusiasm for making DISC a supportive community",
        "Experience in event planning for student clubs",
        "Active involvement in the campus tech community (a plus)",
      ],
      responsibilities: [
        "Plan, organize, and oversee social and professional development events",
        "Coordinate career workshops, alumni panels, and study sessions",
        "Attend weekly exec meetings",
      ],
      whyApply: [
        "Freedom and budget to plan meaningful events",
        "Opportunities to meet members across the organization",
        "Create a warm and rewarding community for DISC members",
      ],
    },
    {
      id: "vp-marketing",
      title: "VP Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14BD95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      timeCommitment: [
        "Average of ~3 hours/week",
        "~5 hours/week during busy periods (events, recruitment)",
        "~1-2 hours/week during lighter periods",
      ],
      lookingFor: [
        "Experience designing promotional materials",
        "Social media management skills",
        "Professional writing abilities",
        "Playfully serious attitude",
      ],
      responsibilities: [
        "Publicize DISC events on social media and university channels",
        "Design promotional materials and corporate support package",
        "Manage DISC's Instagram, Listserv, and Wildcat Connection",
        "Take photos at DISC events",
        "Respond to member emails",
        "Attend weekly exec meetings",
      ],
      whyApply: [
        "Design materials that will be seen across Northwestern and by industry executives",
        "Be the public face of DISC and interact with students, faculty, and administrators",
        "Express your creativity while building professional skills",
      ],
    },
    {
      id: "treasurer",
      title: "Treasurer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14BD95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      lookingFor: [
        "Detail-oriented and organized individual",
        "Good at keeping track of deadlines",
        "Takes initiative and accountability",
      ],
      responsibilities: [
        "Manage all club finance matters",
        "Maintain the club ledger and liaise with SOFO",
        "Ensure responsible use of funds",
        "Work with Co-Presidents to apply for grants",
        "Attend weekly exec meetings",
      ],
      whyApply: [
        "Be a key part of new events and initiatives",
        "Gain experience relevant to corporate finance or accounting",
        "Help get free food for events!",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <HeaderWithHighlight highlight={true} green={true}>
            Join the DISC Executive Board
          </HeaderWithHighlight>
          <p className="mt-16 text-xl text-gray-500 max-w-3xl mx-auto">
            Help shape the future of DISC by applying to be part of our
            executive team. We&apos;re looking for passionate students who want
            to make an impact through technology and leadership.
          </p>
        </div>
      </section>

      {/* Timeline & Roles Sections Combined */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Cards */}
          <div className="mb-16">
            <HeaderWithHighlight
              highlight={true}
              center={true}
              className="mb-12"
            >
              Application Timeline
            </HeaderWithHighlight>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-[#40B4B4]/20 hover:shadow-md transition-all"
              >
                <div className="bg-[#40B4B4]/5 p-4">
                  <div className="h-8 w-8 rounded-full bg-[#40B4B4] flex items-center justify-center mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Opens
                  </h3>
                  <p className="text-sm text-[#40B4B4] font-medium">
                    March 6th
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">
                    The application form opens for all executive board
                    positions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-[#40B4B4]/20 hover:shadow-md transition-all"
              >
                <div className="bg-[#40B4B4]/5 p-4">
                  <div className="h-8 w-8 rounded-full bg-[#40B4B4] flex items-center justify-center mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Closes
                  </h3>
                  <p className="text-sm text-[#40B4B4] font-medium">
                    March 16th
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">
                    All applications must be submitted by this date.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-[#40B4B4]/20 hover:shadow-md transition-all"
              >
                <div className="bg-[#40B4B4]/5 p-4">
                  <div className="h-8 w-8 rounded-full bg-[#40B4B4] flex items-center justify-center mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Interview Period
                  </h3>
                  <p className="text-sm text-[#40B4B4] font-medium">
                    March 17th - April 4th
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">
                    Selected candidates will be invited for interviews.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-[#40B4B4]/20 hover:shadow-md transition-all"
              >
                <div className="bg-[#40B4B4]/5 p-4">
                  <div className="h-8 w-8 rounded-full bg-[#40B4B4] flex items-center justify-center mb-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Offers Sent
                  </h3>
                  <p className="text-sm text-[#40B4B4] font-medium">
                    April 1st - 9th
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">
                    Offers will be sent on a rolling basis. Applicants have 48
                    hours to accept.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <WarningAlert
                title="Important Notice"
                message="Please note that all applicants must be available to attend weekly exec meetings during the 2025-2026 academic year. The exact meeting time will be determined based on the availability of all exec members."
              />
            </div>
          </div>

          {/* Roles Section with Tabs */}
          <div className="mt-24">
            <HeaderWithHighlight
              highlight={true}
              center={true}
              className="mb-12"
            >
              Available Positions
            </HeaderWithHighlight>

            <div className="mb-8 flex justify-center">
              <div className="inline-flex border border-[#40B4B4]/20 rounded-full p-1 bg-white shadow-sm overflow-x-auto max-w-full">
                {roles.map((role) => (
                  <Button
                    key={role.id}
                    onClick={() => setActiveTab(role.id)}
                    variant="ghost"
                    className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${
                      activeTab === role.id
                        ? "bg-[#40B4B4] text-white"
                        : "text-gray-600 hover:text-[#40B4B4]"
                    }`}
                  >
                    {role.title}
                  </Button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {roles.map(
                (role) =>
                  role.id === activeTab && (
                    <div
                      key={role.id}
                      className="bg-gradient-to-br from-[#40B4B4]/5 to-[#14BD95]/5 p-6 rounded-2xl border border-[#40B4B4]/10"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#14BD95]/10 flex items-center justify-center shrink-0">
                          {role.icon}
                        </div>
                        <SubheadingWithHighlight
                          highlight={true}
                          center={false}
                          green={true}
                        >
                          {role.title}
                        </SubheadingWithHighlight>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="overflow-hidden border-[#40B4B4]/20 bg-white/70 backdrop-blur-sm">
                          <div className="bg-[#40B4B4]/10 p-4">
                            <h4 className="text-[#40B4B4] font-semibold">
                              What We&apos;re Looking For
                            </h4>
                          </div>
                          <CardContent className="pt-4">
                            <ul className="list-disc pl-5 space-y-1 text-gray-500 text-sm">
                              {role.lookingFor.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-[#40B4B4]/20 bg-white/70 backdrop-blur-sm">
                          <div className="bg-[#40B4B4]/10 p-4">
                            <h4 className="text-[#40B4B4] font-semibold">
                              Why Apply
                            </h4>
                          </div>
                          <CardContent className="pt-4">
                            <ul className="list-disc pl-5 space-y-1 text-gray-500 text-sm">
                              {role.whyApply.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <div className="md:col-span-2">
                          <Card className="overflow-hidden border-[#40B4B4]/20 bg-white/70 backdrop-blur-sm">
                            <div className="bg-[#40B4B4]/10 p-4">
                              <h4 className="text-[#40B4B4] font-semibold">
                                Responsibilities
                              </h4>
                            </div>
                            <CardContent className="pt-4">
                              <ul className="list-disc pl-5 space-y-1 text-gray-500 text-sm">
                                {role.responsibilities.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        {role.timeCommitment && (
                          <div className="md:col-span-2">
                            <Card className="overflow-hidden border-[#40B4B4]/20 bg-white/70 backdrop-blur-sm">
                              <div className="bg-[#40B4B4]/10 p-4">
                                <h4 className="text-[#40B4B4] font-semibold">
                                  Time Commitment
                                </h4>
                              </div>
                              <CardContent className="pt-4">
                                <ul className="list-disc pl-5 space-y-1 text-gray-500 text-sm">
                                  {role.timeCommitment.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                  )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <HeaderWithHighlight highlight={true} center={true} className="mb-12">
            Executive Board Applications FAQ
          </HeaderWithHighlight>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#40B4B4]/5 to-white p-6 rounded-xl border border-[#40B4B4]/10"
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Who can apply to be on the exec board?
              </h4>
              <p className="text-gray-500">
                Any Northwestern undergraduate or graduate student who will be
                enrolled during the 2025-2026 academic year is eligible to
                apply. <br />
                <strong>
                  Note: All executive board members must be present and on
                  campus during their four quarter tenure (Spring 2025 - Spring
                  2026). Unfortunately,, there are no exceptions to this.
                </strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#40B4B4]/5 to-white p-6 rounded-xl border border-[#40B4B4]/10"
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Do I need prior experience with DISC to apply?
              </h4>
              <p className="text-gray-500">
                Although prior involvement with DISC is helpful (e.g Discover
                program, fall workshop series, general member event attendance),
                it is not required. We are looking for new and innovative ideas
                and more importantly, passionate individuals who align with our
                mission, are committed to the role(s) that they apply for and
                generally want to push DISC even further.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#40B4B4]/5 to-white p-6 rounded-xl border border-[#40B4B4]/10"
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Can I apply for multiple positions?
              </h4>
              <p className="text-gray-500">
                Yes, you can apply for multiple positions. Just indicate your
                preferences in the application form. Note that you will be copy
                and pasting some of your responses as well (for more generic
                questions).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#40B4B4]/5 to-white p-6 rounded-xl border border-[#40B4B4]/10"
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                What is the time commitment for exec board members?
              </h4>
              <p className="text-gray-500">
                Time commitments vary by role, but all exec members must attend
                weekly meetings and fulfill their role-specific
                responsibilities. Most positions require 2-5 hours per week.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 bg-gradient-to-br from-[#40B4B4]/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#40B4B4]">
              Ready to Help Lead DISC?
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Join our executive board and be part of shaping DISC&apos;s future
              at Northwestern.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#40B4B4] hover:bg-[#369999] text-white"
                onClick={() =>
                  window.open(
                    "https://forms.gle/YourApplicationFormLink",
                    "_blank"
                  )
                }
              >
                Apply Now
              </Button>
              <Link href="/#team">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#40B4B4] text-[#40B4B4] hover:bg-[#40B4B4]/10"
                >
                  Meet Current Exec
                </Button>
              </Link>
            </div>
          </div>

          <p className="mt-12 text-gray-500">
            Questions? Contact us at{" "}
            <a
              href="mailto:disc@u.northwestern.edu"
              className="text-[#40B4B4] hover:underline font-medium"
            >
              disc@u.northwestern.edu
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
