import { RoleSection } from "@/_components/_sections/ExecutiveBoardApplications/exec-role-section";
import type { Role } from "@/types";

const icons = {
  time: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14BD95"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  responsibilities: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14BD95"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  lookingFor: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14BD95"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  whyApply: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14BD95"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  ),
};

export const RoleDetails = ({ role }: { role: Role }) => (
  <div className="mt-8 mb-10">
    <div className="mb-6 flex items-center">
      <div className="p-3 bg-teal-100 rounded-lg mr-4">{role.icon}</div>
      <h2 className="text-2xl font-bold text-gray-800">
        {role.title} - {role.seats} Seats Available
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RoleSection
        title="Time Commitment"
        items={role.timeCommitment || []}
        icon={icons.time}
        bgColor="bg-blue-50"
      />

      <RoleSection
        title="Responsibilities"
        items={role.responsibilities || []}
        icon={icons.responsibilities}
        bgColor="bg-green-50"
      />

      <RoleSection
        title="We're Looking For"
        items={role.lookingFor || []}
        icon={icons.lookingFor}
        bgColor="bg-purple-50"
      />

      <RoleSection
        title="Why Apply"
        items={role.whyApply || []}
        icon={icons.whyApply}
        bgColor="bg-orange-50"
      />
    </div>
  </div>
);
