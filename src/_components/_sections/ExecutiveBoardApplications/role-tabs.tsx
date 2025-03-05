import { useState } from "react";
import type { TabRefsType } from "@/types";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import { motion } from "framer-motion";
import type { Role } from "@/types";
import { RoleDetails } from "@/_components/_sections/ExecutiveBoardApplications/exec-role-details";

const roles: Role[] = [
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
      "Fall Quarter: 10 hours/week (Weekly exec meeting, weekly workshop meeting, & weekly tech-lead syncs)",
      "Winter & Spring Quarters: 3 hours/week (Weekly exec meeting, tech-lead syncs)",
    ],
    lookingFor: [
      "Teaching, mentoring, and coaching experience",
      "Ability to explain things clearly to beginners",
      "A passion for educating and leading others",
      "Industry SWE internship experience (or expected internship experience for this coming summer)",
      "Strong proficiency in at least one area of web dev: frontend development (React, HTML, CSS), backend development (APIs, databases), UI/UX design (Figma)",
      "Good coding skills",
      "Someone who is fun to work with",
    ],
    responsibilities: [
      "Run the Fall Workshop Series (create educational content about web development topics, run weekly workshops, evaluate assignments, maintain website)",
      "Shape the Discover Program application process (determine application process, interview candidates, make decisions, publish information)",
      "Run the Discover Program (prepare/maintain project templates, run weekly studio meetings, provide guidance to teams, enforce attendance requirements)",
      "Update and maintain DISC websites (workshop series website, DISC website, documentation website)",
      "Attend weekly exec meetings and tech-lead syncs",
    ],
    whyApply: [
      "You enjoy teaching - you're essentially a professor for a beginner CS web dev course and later a mentor for project teams",
      "You enjoy diving deeper into complex tech - you'll build robust mental models to explain to others",
      "You enjoy working with beginners - both in fall workshops and winter/spring Discover Program",
      "You want to shape the technical direction of the NU CS community - deciding what skills 100+ people build",
      "You enjoy visibility - you'll be the face everyone sees at workshop & studio every week",
      "You enjoy talking to new people - building close relationships with attendees and those you coach",
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
    timeCommitment: [
      "Fall Quarter and Start of Winter Quarter: 3-4 hours/week (Weekly exec meeting, client sourcing)",
      "Other weeks are relatively lighter (~1-2 hours/week)",
    ],
    lookingFor: [
      "Strong organizational and project management skills",
      "Excellent communication and relationship-building skills",
      "Ability to translate client asks into clear technical scopes and project descriptions",
      "Passion for social impact and technology",
      "Prior club or professional experience in outreach or partnership management",
      "Familiarity with DISC's tech stack",
      "BONUS: experience in product management, tech consulting, or similar where you've scoped technical solutions",
    ],
    responsibilities: [
      "Source & Finalize Clients (Fall) - Research local nonprofits, perform email outreach, pitch DISC's mission, confirm projects",
      "Support client and project communications (Winter/Spring) - Ensure smooth introduction, address issues, replace projects if needed",
      "Winter & Spring: engage corporate sponsors",
      "Attend weekly exec meetings",
    ],
    whyApply: [
      "You enjoy networking and building relationships - connecting with local nonprofits and learning about their missions",
      "You like the intersection of business and tech - engaging with clients, refining project scopes, and ensuring alignment between client needs and technical feasibility",
      "You want to shape DISC's social impact - having a say in which nonprofits DISC partners with",
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
      "~2 hours/week during non-event weeks (Weekly exec meeting, brainstorming events, helping with core scheduling)",
      "Additional ~4-6 hours per general member event (finding venue, coordinating marketing, food, slides, attending event)",
    ],
    lookingFor: [
      "Someone who is enthusiastic and excited about making DISC a supportive and fun community",
      "Anyone who has some experience in event planning for student clubs/organizations",
      "A plus if you're active in the tech community on campus and you've attended events by school clubs",
    ],
    responsibilities: [
      "Plan, organize, and oversee social and professional development events for general members (career workshops, alumni panels, study & chill sessions, etc.)",
      "Attend weekly exec meetings",
    ],
    whyApply: [
      "You'll have a lot of freedom (and a good amount of money) to plan fun and meaningful events for our members!",
      "You'll get to meet most of our members and many members of the tech community on campus",
      "You'll have the opportunity to make DISC a warm and rewarding community for all of its members",
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
      "Average of ~3 hours/week (Weekly exec meetings, creating flyers, drafting announcements, managing communications)",
      "~5 hours/week during busy periods (events, application periods, recruitment periods)",
      "~1-2 hours/week during lighter periods",
    ],
    lookingFor: [
      "Experience designing promotional materials and managing social media accounts (Instagram, Discord, etc.)",
      "Good at professional writing",
      "Playfully serious attitude (likes to have fun with their work, but takes their job seriously)",
      "Past experience in marketing, communications, or design is a plus but definitely not required!",
    ],
    responsibilities: [
      "Publicize DISC events on social media, university channels, and through other clubs",
      "Design promotional materials and corporate support package",
      "Manage DISC's Instagram, ListServ, and Wildcat Connection",
      "Take photos at DISC events",
      "Respond to member emails",
      "Attend weekly exec meetings",
    ],
    whyApply: [
      "You'll get to design cool promotional materials that will be seen by members across the Northwestern community and industry executives",
      "You'll be the public face of the club and interact with students, faculty and administrators who are interested in DISC",
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
      "Anyone who is detail-oriented, organized, and good at keeping track of deadlines",
      "Someone who takes initiative and accountability",
    ],
    responsibilities: [
      "Take charge of all club finance matters, including managing the ledger, liaising with SOFO, and ensuring the club uses its funds responsibly",
      "Work with the Co-Presidents to apply to grants",
      "Attend weekly exec meetings",
    ],
    whyApply: [
      "As the person in charge of our funds, you'll be a big part of many new events and initiatives!",
      "Great experience if you're interested in corporate finance or accounting",
      "You get to help us get free food",
    ],
  },
];

export const RolesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("technical-lead");
  const [tabRefs, setTabRefs] = useState<TabRefsType>({});

  return (
    <div className="mt-40 min-h-screen">
      <HeaderWithHighlight highlight={true} center={true} className="mb-12">
        Roles and Responsibilities Overview
      </HeaderWithHighlight>
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border border-[#40B4B4]/20 rounded-full p-1 bg-white shadow-sm overflow-x-auto max-w-full relative">
          {roles.map((role) => (
            <div
              key={role.id}
              ref={(el) => {
                if (el && !tabRefs[role.id]) {
                  setTabRefs((prev) => ({
                    ...prev,
                    [role.id]: el,
                  }));
                }
              }}
            >
              <div
                onClick={() => setActiveTab(role.id)}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  whitespace-nowrap
                  relative
                  z-20
                  cursor-pointer
                  font-medium
                  transition-colors
                  ${
                    activeTab === role.id
                      ? "text-white"
                      : "text-gray-600 hover:text-[#40B4B4]"
                  }
                `}
              >
                {role.title}
              </div>
            </div>
          ))}
          <motion.div
            className="absolute top-1 bottom-1 rounded-full bg-[#40B4B4] z-10"
            layoutId="activeTabBackground"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: tabRefs[activeTab]?.offsetWidth || "auto",
              left: tabRefs[activeTab]?.offsetLeft || 0,
            }}
          />
        </div>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4"
      >
        {roles.map(
          (role) =>
            role.id === activeTab && <RoleDetails key={role.id} role={role} />
        )}
      </motion.div>
    </div>
  );
};
