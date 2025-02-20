"use client";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import Link from "next/link";
export default function DiscoverFAQ() {
  return (
    <section className="mb-16" id="faq">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Frequently Asked Questions
      </HeaderWithHighlight>

      <div className="space-y-8">
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem
            value="item-1"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2 text-left">
              I don&apos;t have any experience, should I still apply to the
              program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <p className="mb-4">
                <strong>The short answer is, yes.</strong>
              </p>
              <p>
                The Discover Program is made for students who have little-to-no
                experience to get their first taste of what it&apos;s like to
                build tech projects in industry. We are not looking for experts,
                we are looking for students who have dipped their toe in the web
                dev water and now want to make their first splash! As long as
                you have basic familiarity with one or more parts of our tech
                stack (we teach all of it in our{" "}
                <Link
                  href="https://workshops.discnu.org/"
                  className="underline font-bold"
                >
                  fall workshop series
                </Link>
                ), you can be confident in your application.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
              What are the admission criteria?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <p className="mb-2">
                In no particular order, we are looking for:
              </p>
              <ul className="space-y-2 pl-4">
                <li>• People who are committed</li>
                <li>• Ability to work and thrive in a team environment</li>
                <li>
                  • Technical competence:
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>
                      - Comfortable using Git and some code editor (we recommend
                      VSCode)
                    </li>
                    <li>
                      - Basic, working understanding of one or more parts of our
                      tech stack
                    </li>
                    <li>
                      - Watching and completing assignments from our fall
                      workshop series is a huge plus
                    </li>
                  </ul>
                </li>
                <li>• Willingness to learn and grow</li>
                <li>• A can-do attitude</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
              What is the time commitment?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <ul className="space-y-2">
                <li>
                  • Minimum 3, average 5 hours per week on DISC-related meetings
                  and work
                </li>
                <li>• Mandatory weekly studio meetings (Mondays 7-8pm)</li>
                <li>• Required attendance at Winter and Spring Showcases</li>
                <li>
                  • Regular team meetings and client communication as needed
                </li>
                <li>
                  • DISC should be prioritized above (almost) all other
                  commitments
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
              What if I&apos;m not accepted?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <p>
                Please don&apos;t be discouraged if you aren&apos;t placed into
                a project team this year! We always have many awesome applicants
                and not as many projects/clients, so we definitely encourage you
                to apply again next year! We&apos;ll also have more general
                member events coming soon :)
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
              What&apos;s the interview process like?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <p>
                Interviews are pretty informal and last about 30 minutes with a
                member of DISC exec. They focus on two main areas:
              </p>
              <ul className="space-y-2 mt-2 pl-4">
                <li>
                  • Evaluating how well you would work in a team environment
                </li>
                <li>
                  • Assessing technical competence through questions about
                  content covered in our fall workshop series (focusing on your
                  areas of strength)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border rounded-lg px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
              What if I missed the application deadline?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              <p>
                You can apply to join the waitlist until midway through the program.
                It&apos;s the same form as the main application, only those who fill it out after the January 4 deadline
                will only be considered for the waitlist.
                Additional program spots might open if new clients are added or members leave the program. 
                We will offer these open spots to people on the waitlist based on best fit. 
                There is no guarantee anyone will make it off the waitlist.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
