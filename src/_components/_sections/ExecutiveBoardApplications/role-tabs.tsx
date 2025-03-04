import { useState } from "react";
import type { TabRefsType } from "@/types";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import { motion } from "framer-motion";
import type { Role } from "@/types";
import { RoleDetails } from "@/_components/_sections/ExecutiveBoardApplications/role-details";

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

export const RolesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("technical-lead");
  const [tabRefs, setTabRefs] = useState<TabRefsType>({});

  return (
    <div className="mt-40 min-h-screen">
      <HeaderWithHighlight highlight={true} center={true} className="mb-12">
        Available Positions
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
        className="mt-8"
      >
        {roles.map(
          (role) =>
            role.id === activeTab && <RoleDetails key={role.id} role={role} />
        )}
      </motion.div>
    </div>
  );
};
