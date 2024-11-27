"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { AlertCircle, Calendar, UserCheck, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  mission: string;
  description: string;
  tech?: string;
  link: string;
  image_url?: string;
}

const ProjectCard = ({
  title,
  mission,
  description,
  tech,
  link,
  image_url,
}: ProjectCardProps) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex flex-col space-y-4">
      {image_url && (
        <div className="relative w-full h-40 mb-2">
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <Link href={link} className="underline text-xl font-semibold text-black">
        {title}
      </Link>
      <div className="space-y-6">
        <div>
          <p className="text-[#40B4B4] font-medium mb-1">Mission</p>
          <p className="text-gray-500 text-base">{mission}</p>
        </div>
        <div>
          <p className="text-[#40B4B4] font-medium mb-1">Project</p>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
        {tech && tech !== "N/A" && (
          <div>
            <p className="text-[#40B4B4] font-medium mb-1">
              Specialized Technologies
            </p>
            <p className="text-gray-500 text-base">{tech}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function DiscoverProgramPage() {
  const projects = [
    {
      title: "Climate Action Evanston - Volunteer Portal",
      mission:
        "Climate Action Evanston accelerates local climate action to meet Evanston's Climate Action and Resilience Plan (CARP) goals through community collaboration.",
      description:
        "Create a website that allows volunteers to log in, view events and volunteer opportunities, and track their attendance and the impact they've made. Their activities will be stored in Action Networks, a database for non-profits that they are using, and sync with the frontend.",
      tech: "Project may utilize the Action Network API.",
      link: "https://www.climateactionevanston.org/",
      image_url:
        "https://ugc.production.linktr.ee/029e07d3-f7f4-4a9b-bebf-dcc084e9f1a7_CAEcirclelogo.png",
    },
    {
      title: "The Recyclery - Website Revamp",
      mission:
        "The Recyclery is a nonprofit bicycle shop that promotes sustainability by encouraging bicycle use through education and access to affordable bikes.",
      description:
        "Replace the current WordPress website with a new website that's more user-friendly. The website should help publicize events/workshops and include blog posts.",
      tech: "Project may utilize Mailchimp and Paypal integrations.",
      link: "https://www.therecyclery.org/",
      image_url:
        "https://www.therecyclery.org/wp-content/uploads/2023/04/webshop_logo.webp",
    },
    {
      title: "Clark Street Bird Sanctuary - Plant Tracking System",
      mission:
        "Clark Street Bird Sanctuary preserves and enhances natural habitats to support bird populations and biodiversity in the Evanston area.",
      description:
        "Create a map-based platform to track progress and location of plants and integrate volunteer work day reports.",
      tech: "Project may utilize a map-based package like ArcGIS Maps SDK.",
      link: "https://clarkstreetbeachbirdsanctuary.org/",
      image_url:
        "https://img1.wsimg.com/isteam/ip/10685ce5-d1b7-4c15-a2a1-5aadcf4ee6ba/logo/9749ee1d-0df6-4395-83bc-dde2c9e32000.JPG/:/rs=w:310,h:310,cg:true,m/cr=w:310,h:310/qt=q:95",
    },
    {
      title: "Sokana Collective - Website Revamp",
      mission:
        "Sokana Collective provides access to culturally competent training, education, and support for doulas and families.",
      description:
        "Replace existing website with a new website from scratch that's more user friendly and easy to navigate. Allow admin accessibility to change the doula list and board of directors on a regular basis. Add an online doula training academy section where people can watch videos for free and register/pay for classes.",
      tech: "Project may utilize video storage and transcoding and Stripe integration.",
      link: "https://www.sokanacollective.com/",
      image_url:
        "https://images.squarespace-cdn.com/content/623f9fd83fd2075fe4f672b0/1654144845808-NO9HONPO1L8VONL34KU5/SC+logo.jpeg?content-type=image%2Fjpeg",
    },
    {
      title: "Sokana Collective - CRM Platform",
      mission:
        "Sokana Collective provides access to culturally competent training, education, and support for doulas and families.",
      description:
        "Replace existing CRM system with a new system that allows patients to have an account to view their balance, update payment information and see information about the doula they are assigned to and doulas can write notes for patients to see.",
      tech: "Project may require additional safeguards to protect electronic protected health information and utilize Quickbooks integration.",
      link: "https://www.sokanacollective.com/",
      image_url:
        "https://images.squarespace-cdn.com/content/623f9fd83fd2075fe4f672b0/1654144845808-NO9HONPO1L8VONL34KU5/SC+logo.jpeg?content-type=image%2Fjpeg",
    },
    {
      title: "North Shore Senior Center - CRM Platform",
      mission:
        "North Shore Senior Center enhances the lives of older adults by providing comprehensive programs and services that promote independence and well-being.",
      description:
        "Replace their existing outdated Access database with a Web-based CRM-like platform that allows admin to input and view client information, participant-based cases, participant activity scores and generate excel-based outcome reports, participant monthly activity reports and invoices.",
      tech: "Project may require additional safeguards to protect electronic protected health information.",
      link: "https://www.nssc.org/",
      image_url:
        "https://www.nssc.org/assets/images/custom/footer_logo_standard.png",
    },
    {
      title: "Institute for Therapy through the Arts - Inventory System",
      mission:
        "Institute for Therapy through the Arts offers creative arts therapies to individuals of all ages to improve mental health and overall quality of life.",
      description:
        "Replace existing Excel workflow with a web-based inventory management system for therapists to check in/check out items and for admins track purchase requests and location data of items (iPads, art supplies, etc.)",
      tech: "N/A",
      link: "https://itachicago.org/blog/",
      image_url:
        "https://itachicago.org/wp-content/uploads/2015/07/ita_logo-e1444063584889.png",
    },
    {
      title: "Avery's Helpful Hair Kit - Scheduling Platform",
      mission:
        "Avery's Helpful Hair Kit provides hair care kits and resources to children in foster care and low-income families.",
      description:
        "Replace manual email coordination with a web-based scheduling solution for interested volunteers to fill out their own availability and then for the organization to select a common date for them to have a hair kit packing session.",
      tech: "N/A",
      link: "https://www.averyshelpfulhairkits.com/",
      image_url:
        "https://static.wixstatic.com/media/2dc9a8_fb75d8f7e9524033b4c1e2862c2f8bf6~mv2.jpg/v1/fill/w_644,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2dc9a8_fb75d8f7e9524033b4c1e2862c2f8bf6~mv2.jpg",
    },
  ];

  return (
    <>
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
              The <strong>Discover Program</strong> connects student tech
              developers with local organizations that have software needs.
              Through this 2-quarter-long program, teams of 5-6 students build
              an industry-grade web application from start to finish that solves
              a critical problem for one of our clients. All of the clients we
              work with are local nonprofits or startups, making this a great
              opportunity to give back to the community while gaining technical
              experience.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8 mt-12">
            <span className="relative">
              <span className="relative z-10">What You&apos;ll Gain</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">👥</span>
                <span>
                  <strong>Find mentorship and companionship</strong>: The DISC
                  community includes hundreds of students and alumni that are
                  interested both in building software and helping the
                  community, making it easy to find like-minded individuals. And
                  every step of the way, students will receive coaching and
                  mentorship from experienced upperclassmen.
                </span>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">🌟</span>
                <span>
                  <strong>Make an impact</strong>: All projects solve critical
                  problems for local organizations. Since students build these
                  projects from the ground up, every student has a huge
                  individual impact for the client.
                </span>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">💻</span>
                <span>
                  <strong>Develop technical skills</strong>: All of our projects
                  are built using the most popular programming languages,
                  frameworks, and libraries in modern web development. Students
                  in the program will become highly-skilled in these
                  technologies.
                </span>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">🤝</span>
                <span>
                  <strong>Develop soft skills</strong>: All students will gain
                  experience working in teams, and all students will be closely
                  interfacing with their client. This builds the critical
                  communication and collaboration skills that set great
                  developers apart.
                </span>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">📝</span>
                <span>
                  <strong>Boost their resume</strong>: One of the most important
                  criteria recruiters look for is impactful and technically
                  complex projects. Students in this program will be able to add
                  an extremely impressive experience to their resume that they
                  can talk up in interviews.
                </span>
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              <p className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">🎯</span>
                <span>
                  <strong>Prepare for jobs</strong>: Every aspect of the program
                  simulates what it&apos;s like to work in tech as part of a
                  software development team. It&apos;s as close to work
                  experience as you can get without working a real job.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10">Tech Stack</span>
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
              This year, we are standardizing the tech stack across all
              projects. This will ensure we are able to produce high-quality
              software that can be easily deployed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">🎨</span>
                  <span>
                    <strong>Design</strong>: All UI/UX design will be done using{" "}
                    <Link
                      href="https://www.figma.com/files/team/1427733327288889266/recents-and-sharing?fuid=1237415769196778584"
                      className="underline font-bold"
                    >
                      Figma
                    </Link>
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">⚛️</span>
                  <span>
                    <strong>Frontend</strong>: Built with{" "}
                    <Link
                      href="https://react.dev/"
                      className="underline font-bold"
                    >
                      React
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      className="underline font-bold"
                    >
                      JavaScript
                    </Link>
                    , using:
                    <br />• Routing:{" "}
                    <Link
                      href="https://reactrouter.com/home"
                      className="underline font-bold"
                    >
                      React Router v7
                    </Link>
                    <br />• Styling:{" "}
                    <Link
                      href="https://styled-components.com/"
                      className="underline font-bold"
                    >
                      styled components
                    </Link>
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">🗄️</span>
                  <span>
                    <strong>Backend</strong>:{" "}
                    <Link
                      href="https://www.postgresql.org/"
                      className="underline font-bold"
                    >
                      PostgresSQL
                    </Link>{" "}
                    database and APIs built using{" "}
                    <Link
                      href="https://nodejs.org/en"
                      className="font-bold underline"
                    >
                      Node
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://expressjs.com/"
                      className="underline font-bold"
                    >
                      Express
                    </Link>
                    , with:
                    <br />• User authentication:{" "}
                    <Link
                      href="https://supabase.com/docs/guides/auth"
                      className="underline font-bold"
                    >
                      Supabase Auth
                    </Link>
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">🚀</span>
                  <span>
                    <strong>Deployment</strong>:
                    <br />• Frontend and API:{" "}
                    <Link
                      href="https://vercel.com/ethanpaneraas-projects"
                      className="underline font-bold"
                    >
                      Vercel
                    </Link>
                    <br />• Database:{" "}
                    <Link
                      href="https://supabase.com/"
                      className="underline font-bold"
                    >
                      Supabase
                    </Link>
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">🛠️</span>
                  <span>
                    <strong>Development Tools</strong>:
                    <br />•{" "}
                    <Link
                      href="https://git-scm.com/"
                      className="underline font-bold"
                    >
                      Git
                    </Link>{" "}
                    on GitHub for version control
                    <br />•{" "}
                    <Link
                      href="https://code.visualstudio.com/"
                      className="underline font-bold"
                    >
                      Visual Studio Code
                    </Link>{" "}
                    as our recommended code editor (+ Neovim if you&apos;d like)
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow">
                <p className="flex items-start gap-3 text-base text-gray-500">
                  <span className="text-2xl">🔌</span>
                  <span>
                    <strong>Additional Technologies</strong>: Some additional
                    technologies (mostly 3rd party APIs), depending on the
                    project
                  </span>
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed mt-8">
              Our Tech Leads (
              <Link
                href="https://www.linkedin.com/in/amyzliao/"
                className="underline font-bold"
              >
                Amy
              </Link>
              ,{" "}
              <Link
                href="https://ethan-pineda.vercel.app/"
                className="underline font-bold"
              >
                Ethan
              </Link>
              ,{" "}
              <Link
                href="https://www.linkedin.com/in/aanand-patel1/"
                className="underline font-bold"
              >
                Aanand
              </Link>
              ) are well-versed in all of these technologies and will act as
              mentors/teachers for the entire duration of the program. However,
              we do expect participants to have basic familiarity with one or
              more of these technologies before the program begins (check out
              our fall{" "}
              <Link
                href="https://disc-fall-2024-workshop-series-website.vercel.app/"
                className="underline font-bold"
              >
                workshop series website
              </Link>
              ).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10">Roles and Expectations</span>
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
              Because we are working with <strong>REAL</strong> clients to build
              software that will have <strong>REAL</strong> users, the stakes
              are high. To ensure that all projects are finished with
              production-level quality, we enforce strict participation
              requirements for our program members.
            </p>

            <p className="text-base text-gray-500 mb-6">
              <strong>All program members are expected to:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-500 mb-8">
              <li>Prioritize DISC above (almost) all other commitments</li>
              <li>
                Spend minimum 3, average 5 hours per week on DISC-related
                meetings and work
              </li>
              <li>
                Attend studio every week (this is a 1-hour weekly meeting on
                Mondays from 7-8pm during Winter)
              </li>
              <li>Attend the Winter Showcase and Spring Showcase</li>
              <li>
                Regularly communicate with the rest of their team, and with the
                client whenever requested
              </li>
              <li>
                Be a team player, taking the initiative to help out their
                teammates in whatever ways they can
              </li>
              <li>
                Be vocal about issues, seeking assistance from DISC exec when
                needed
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10 text-black">
                Team Structure and Layout
              </span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>

          <div className="flex flex-col gap-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">👔</span>
                <span>
                  <strong className="text-lg font-semibold text-[#14BD95]">
                    Product Manager (1 per team)
                  </strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Maintain regular communication with the client, including
                      organizing a recurring meeting with the client to provide
                      updates and clarify expectations
                    </li>
                    <li>
                      Be a liaison between their team and DISC exec, informing
                      exec about progress and blockers, and informing their team
                      on updates from DISC exec
                    </li>
                    <li>
                      Schedule and lead regular team meetings (minimum once a
                      week) outside of studio. In these meetings:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Set agendas</li>
                        <li>Delegate tasks</li>
                        <li>Ensure reasonable progress is being made</li>
                      </ul>
                    </li>
                    <li>
                      Generally, take initiative and sort out all teamwork
                      logistics
                    </li>
                    <li>
                      Provide feedback to other team members on their work,
                      taking the initiative to help out others when requested
                    </li>
                    <li>
                      Ensure that the project is well organized, well
                      documented, finished, and handed off to the client by the
                      end of the program
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">🎨</span>
                <span>
                  <strong className="text-lg font-semibold text-[#14BD95]">
                    UI/UX Designer (1 per team)
                  </strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Take ownership of the design of the app:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Design it from scratch</li>
                        <li>
                          Iteratively improve it using client and team feedback
                        </li>
                        <li>
                          Ensure the design is high-quality and meets client
                          expectations
                        </li>
                        <li>
                          Ensure the actual built interface matches the design
                        </li>
                      </ul>
                    </li>
                    <li>
                      Regularly communicate design updates to their team,
                      clients, and DISC exec
                    </li>
                    <li>Write some frontend code</li>
                    <li>
                      Provide feedback to other team members on their work,
                      taking the initiative to help out others when requested
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow md:col-span-2">
              <div className="flex items-start gap-3 text-base text-gray-500">
                <span className="text-2xl">💻</span>
                <span>
                  <strong className="text-lg font-semibold text-[#14BD95]">
                    Engineers (3-4 per team)
                  </strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Write lots of code
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                          Some engineers might focus on different parts of the
                          stack (frontend engineers and backend engineers).
                          Others will work on all parts of the stack (full stack
                          engineers).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Take ownership of features:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Build features from scratch</li>
                        <li>
                          Iteratively improve features using client and team
                          feedback
                        </li>
                        <li>
                          Produce high-quality code that is bug-free and
                          readable/maintainable
                        </li>
                        <li>
                          Learn any and all relevant technologies required for
                          implementation
                        </li>
                        <li>Ensure features meet client expectations</li>
                      </ul>
                    </li>
                    <li>Regularly communicate updates to their team</li>
                    <li>
                      Provide feedback to other team members on their work,
                      taking the initiative to help out others when requested
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>

        <Alert
          variant="default"
          className="mb-16 border-[#F1C40F] bg-[#FDF8E4] text-[#7C6A1C]"
        >
          <AlertCircle color="#F1C40F" size={24} />
          <AlertTitle className="text-[#7C6A1C] font-medium">
            Important Notice
          </AlertTitle>
          <AlertDescription className="text-[#7C6A1C] text-base mt-2">
            Participants who are not fulfilling expectations are subject to
            removal from the Discover Program at the discretion of DISC exec. An
            applicant waitlist will be maintained to reduce the impact of these
            potential removals on the teams and projects.
          </AlertDescription>
        </Alert>

        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#14BD95] mb-4">
              Participation Requirements (Summary)
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
              <span className="relative z-10">Project Descriptions</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>

          <p className="text-base text-gray-500 mb-8">
            Note: Specialized Technologies listed are project-specific
            technologies which will be used in addition to DISC&apos;s standard
            tech stack of React/Node/Vercel/Supabase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10">Application Timeline</span>
              <span className="absolute bottom-0 left-0 w-full h-6 bg-green-200/20"></span>
            </span>
          </h2>

          <p className="text-base text-gray-500 py-4 mb-8">
            Studios are <strong>mandatory, in-person, weekly</strong> meetings.
            They will be held every Monday from 7-8pm in Winter Quarter. The
            time for Studio during Spring Quarter will be announced later.
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
              <p className="text-base text-gray-500">
                First client meetings occur
              </p>
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

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10">Application</span>
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
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="relative">
                  <span className="relative z-10 italic">
                    I don&apos;t have any experience, should I apply?
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "1.4375rem",
                      background: "rgba(20, 189, 149, 0.20)",
                    }}
                  ></span>
                </span>
              </h3>

              <div className="space-y-4 text-gray-500">
                <p className="text-base leading-relaxed">
                  <strong>The short answer is, yes.</strong>
                </p>
                <p className="text-base leading-relaxed">
                  The long answer is, the Discover Program is made for students
                  who have little-to-no experience to get their first taste of
                  what it&apos;s like to build tech projects in industry. We are
                  not looking for experts, we are looking for students who have
                  dipped their toe in the web dev water and now want to make
                  their first splash! As long as you have basic familiarity with
                  one or more parts of our tech stack (we teach all of it in our
                  <Link
                    href="https://disc-fall-2024-workshop-series-website.vercel.app/"
                    className="underline font-bold"
                  >
                    fall workshop series
                  </Link>
                  ), you can be confident in your application.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="relative">
                  <span className="relative z-10">Admission Criteria</span>
                  <span
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "1.4375rem",
                      background: "rgba(20, 189, 149, 0.20)",
                    }}
                  ></span>
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow">
                  <p className="flex items-start gap-3 text-base text-gray-500">
                    <span className="text-2xl">💪</span>
                    <span>
                      <strong>People who are committed</strong>
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <p className="flex items-start gap-3 text-base text-gray-500">
                    <span className="text-2xl">👥</span>
                    <span>
                      <strong>
                        Ability to work and thrive in a team environment
                      </strong>
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <p className="flex items-start gap-3 text-base text-gray-500">
                    <span className="text-2xl">🌱</span>
                    <span>
                      <strong>Willingness to learn and grow</strong>
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <p className="flex items-start gap-3 text-base text-gray-500">
                    <span className="text-2xl">⭐</span>
                    <span>
                      <strong>A can-do attitude</strong>
                    </span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow md:col-span-2">
                  <div className="flex items-start gap-3 text-base text-gray-500">
                    <span className="text-2xl">💻</span>
                    <span>
                      <strong>Technical competence</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                          Comfortable using Git and some code editor (we
                          recommend VSCode)
                        </li>
                        <li>
                          Basic, working understanding of one or more parts of
                          our tech stack
                        </li>
                        <li>
                          Watching and completing assignments from our{" "}
                          <Link
                            href="https://disc-fall-2024-workshop-series-website.vercel.app/"
                            className="underline font-bold"
                          >
                            fall workshop series
                          </Link>{" "}
                          is a huge plus
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
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

          <ol className="relative border-s border-gray-200 ms-3">
            <li className="mb-12 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#40B4B4] rounded-full -start-4 ring-8 ring-white">
                <Calendar className="w-4 h-4 text-white" />
              </span>
              <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900">
                Step 1: Apply
                <span className="bg-[#40B4B4] bg-opacity-10 text-[#40B4B4] text-sm font-medium px-2.5 py-0.5 rounded ms-3">
                  Current
                </span>
              </h3>
              <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
                11/26/24 - 1/4/25
              </time>
              <div className="text-base text-gray-500 space-y-2">
                <Link
                  href="https://docs.google.com/forms/d/1EEoSZWhjfhWESPpIYJggNZkSiyrroSLB11pTmK3i2Wc/viewform?edit_requested=true&pli=1"
                  className="underline font-bold hover:cursor-pointer"
                >
                  LINK TO APPLICATION
                </Link>
                <p>
                  The application closes at 11:59pm CST on January 4th, 2025.
                </p>
                <p>
                  The application will provide an opportunity to submit your
                  work from the{" "}
                  <Link
                    href="https://disc-fall-2024-workshop-series-website.vercel.app/"
                    className="underline font-bold"
                  >
                    fall workshop series
                  </Link>{" "}
                  to demonstrate technical competency.
                </p>
                <p>
                  Applications are kind-of rolling. We encourage you to apply
                  earlier for the best shot. However, we also encourage you to
                  apply with assignment submissions for the best shot. So
                  really, do whatever you think is best.
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
                1/6/25 - 1/17/25
              </time>
              <div className="text-base text-gray-500 space-y-2">
                <p>
                  Selected applicants will be invited to do one 30-minute
                  interview with a member of DISC exec.
                </p>
                <p>
                  Interviews are pretty informal. They will focus on determining
                  whether an applicant would work well on a team, and their
                  technical competence. Applicants can expect to be quizzed on
                  anything taught in our{" "}
                  <Link
                    href="https://disc-fall-2024-workshop-series-website.vercel.app/"
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
              </h3>
              <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
                1/19/25
              </time>
              <div className="text-base text-gray-500 space-y-2">
                <p>
                  All applicants will be notified of their acceptance/rejection,
                  and their team assignment if accepted.
                </p>
                <p>
                  Please don&apos;t be discouraged if you aren&apos;t placed
                  into a project team this year! We always have many awesome
                  applicants and not as many projects/clients, so we definitely
                  encourage you to apply again next year! We&apos;ll also have
                  more general member events coming soon :)
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="relative">
              <span className="relative z-10">Discover Program FAQ</span>
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
                    The Discover Program is made for students who have
                    little-to-no experience to get their first taste of what
                    it&apos;s like to build tech projects in industry. We are
                    not looking for experts, we are looking for students who
                    have dipped their toe in the web dev water and now want to
                    make their first splash! As long as you have basic
                    familiarity with one or more parts of our tech stack (we
                    teach all of it in our fall workshop series), you can be
                    confident in your application.
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
                          - Comfortable using Git and some code editor (we
                          recommend VSCode)
                        </li>
                        <li>
                          - Basic, working understanding of one or more parts of
                          our tech stack
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
                      • Minimum 3, average 5 hours per week on DISC-related
                      meetings and work
                    </li>
                    <li>• Mandatory weekly studio meetings (Mondays 7-8pm)</li>
                    <li>
                      • Required attendance at Winter and Spring Showcases
                    </li>
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
                    Please don&apos;t be discouraged if you aren&apos;t placed
                    into a project team this year! We always have many awesome
                    applicants and not as many projects/clients, so we
                    definitely encourage you to apply again next year!
                    We&apos;ll also have more general member events coming soon
                    :)
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
                    Interviews are pretty informal and last about 30 minutes
                    with a member of DISC exec. They focus on two main areas:
                  </p>
                  <ul className="space-y-2 mt-2 pl-4">
                    <li>
                      • Evaluating how well you would work in a team environment
                    </li>
                    <li>
                      • Assessing technical competence through questions about
                      content covered in our fall workshop series (focusing on
                      your areas of strength)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
      <div className="relative flex h-screen w-full items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: `
            linear-gradient(135deg, 
              rgba(94, 206, 206, 0.08) 0%, 
              rgba(208, 240, 240, 0.05) 50%,
              rgba(230, 247, 247, 0.03) 100%
            ),
            radial-gradient(circle at 0% 0%, 
              rgba(77, 204, 204, 0.3) 0%, 
              rgba(77, 204, 204, 0) 60%
            ),
            radial-gradient(circle at 100% 0%, 
              rgba(185, 233, 233, 0.2) 0%, 
              rgba(185, 233, 233, 0) 50%
            ),
            radial-gradient(circle at 100% 100%, 
              rgba(64, 180, 180, 0.25) 0%, 
              rgba(64, 180, 180, 0) 60%
            ),
            radial-gradient(circle at 0% 100%, 
              rgba(94, 206, 206, 0.2) 0%, 
              rgba(94, 206, 206, 0) 50%
            ),
            linear-gradient(180deg, 
              rgba(208, 240, 240, 0.1) 0%, 
              rgba(94, 206, 206, 0.15) 100%
            )
          `,
          }}
        />
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#297777] to-[#40B4B4] mb-4">
              Apply to the Discover Program
            </h2>
            <p className="text-gray-500 text-lg">
              And take the first step towards building impactful projects
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

          <div className="mt-8 space-y-4">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
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
    </>
  );
}
