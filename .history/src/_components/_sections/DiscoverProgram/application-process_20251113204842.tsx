import { Calendar, UserCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function ApplicationProcess() {
  return (
    <section className="mb-16" id="application-process">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Application Process
      </HeaderWithHighlight>

      <ol className="relative border-s border-gray-200 ms-3">
        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <Calendar className="w-4 h-4 text-white" />
          </span>
          <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900">
            Step 1: Apply
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            11/24/25 - 1/3/26
          </time>
          <div className="text-base text-gray-500 space-y-2">
            {/* <Link
              href="https://docs.google.com/forms/d/1EEoSZWhjfhWESPpIYJggNZkSiyrroSLB11pTmK3i2Wc/viewform?edit_requested=true&pli=1"
              className="underline font-bold hover:cursor-pointer"
            >
              LINK TO APPLICATION
            </Link> */}
            <p>
              Applications have NOT opened yet, but they will likely be due the first week of Winter Quarter. 
              The form will remain open until midway through the program, but those who apply after January 4
              will only be considered for the waitlist.
            </p>
            <p>
              The application will provide an opportunity to submit your work
              from the{" "}
              <Link
                href="https://workshops.discnu.org/"
                className="underline font-bold"
              >
                fall workshop series
              </Link>{" "}
              to demonstrate technical competency.
            </p>
            <p>
              Applications are kind-of rolling. We encourage you to apply
              earlier for the best shot. However, we also encourage you to apply
              with assignment submissions for the best shot. So really, do
              whatever you think is best.
            </p>
          </div>
        </li>

        <li className="mb-12 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <UserCheck className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Step 2: Interview
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            1/5/26 - 1/16/26
          </time>
          <div className="text-base text-gray-500 space-y-2">
            <p>
              Selected applicants will be invited to do one 30-minute interview
              with a member of DISC exec.
            </p>
            <p>
              Interviews are pretty informal. They will focus on determining
              whether an applicant would work well on a team, and their
              technical competence. Applicants can expect to be quizzed on
              anything taught in our{" "}
              <Link
                href="https://workshops.discnu.org/"
                className="underline font-bold"
              >
                fall workshop series
              </Link>
              , but questions will focus on areas of the applicant&apos;s
              strengths.
            </p>
          </div>
        </li>

        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
            <CheckCircle className="w-4 h-4 text-white" />
          </span>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Decisions Released
            {/* <span className="bg-[#40B4B4] bg-opacity-10 text-[#40B4B4] text-sm font-medium px-2.5 py-0.5 rounded ms-3">
              Current
            </span> */}
          </h3>
          <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
            1/19/25
          </time>
          <div className="text-base text-gray-500 space-y-2">
            <p>
              All applicants will be notified of their acceptance/rejection, and
              their team assignment if accepted.
            </p>
            <p>
              Please don&apos;t be discouraged if you aren&apos;t placed into a
              project team this year! We always have many awesome applicants and
              not as many projects/clients, so we definitely encourage you to
              apply again next year! We&apos;ll also have more general member
              events coming soon :)
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
