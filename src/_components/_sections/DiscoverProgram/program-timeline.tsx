import { Calendar, UserCheck, CheckCircle } from "lucide-react";

export default function ProgramTimeline() {
  return (
    <section className="mb-16" id="program-timeline">
      <h2 className="text-3xl font-bold mb-8">
        <span className="relative">
          <span className="relative z-10">Program Timeline</span>
          <span className="absolute bottom-0 left-0 w-full h-6 bg-green-200/20"></span>
        </span>
      </h2>

      <p className="text-base text-gray-500 py-4 mb-8">
        Studios are <strong>mandatory, in-person, weekly</strong> meetings. They
        will be held every Monday from 7-8pm in Winter Quarter. The time for
        Studio during Spring Quarter will be announced later.
      </p>

      <ol className="relative border-s border-gray-200 ms-3">
        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900">
            First Studio & Client Prep
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Winter Quarter
          </time>
          <p className="text-base text-gray-500">
            First studio (fun program kickoff event), and prep for meeting
            clients
          </p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <UserCheck className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Initial Client Meetings
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Winter Quarter - Week 4
          </time>
          <p className="text-base text-gray-500">First client meetings occur</p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Winter Development
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Winter Quarter - Weeks 5-9
          </time>
          <p className="text-base text-gray-500">Work on projects</p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <CheckCircle className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Winter Showcase
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Winter Quarter - Week 10
          </time>
          <p className="text-base text-gray-500">
            <strong>Winter Showcase</strong> (during studio)
          </p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Spring Development
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Spring Quarter - Weeks 1-8
          </time>
          <p className="text-base text-gray-500">Work on projects</p>
        </li>

        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <CheckCircle className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Final Project Showcase
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Spring Quarter - Week 9
          </time>
          <p className="text-base text-gray-500">
            <strong>Final Project Showcase</strong> (during studio)
          </p>
        </li>
      </ol>
    </section>
  );
}
