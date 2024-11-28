import { Calendar, UserCheck, CheckCircle } from "lucide-react";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function ProgramTimeline() {
  return (
    <section className="mb-16" id="application-timeline">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Program Timeline
      </HeaderWithHighlight>

      <p className="text-base text-gray-500 mb-8">
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
            Winter Quarter - Week 3
          </time>
          <p className="text-base text-gray-500">
            The first studio will be a fun program kickoff event.
            <br />
            Teams start preparing for their first client meetings.
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
          <p className="text-base text-gray-500">
            Teams meet with clients for the first time.
          </p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            App Development
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Winter Quarter - Weeks 5-9
          </time>
          <p className="text-base text-gray-500">
            Teams continuously work on projects.
          </p>
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
            An official midway checkpoint for teams to show off their progress.
            <br />
            Held during extended studio time (normal studio time + one hour
            after).
          </p>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            App Development
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            Spring Quarter - Weeks 1-8
          </time>
          <p className="text-base text-gray-500">
            Teams continuously work on projects.
          </p>
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
            Teams present final projects to clients and the broader DISC
            community.
            <br />
            Held during extended studio time (normal studio time + one hour
            after).
          </p>
        </li>
      </ol>
    </section>
  );
}
