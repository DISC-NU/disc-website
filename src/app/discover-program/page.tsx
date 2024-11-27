import ProgramOverview from "@/_components/_sections/DiscoverProgram/program-overview";
import TechStack from "@/_components/_sections/DiscoverProgram/tech-stack";
import Expectations from "@/_components/_sections/DiscoverProgram/expectations";
import TeamStructure from "@/_components/_sections/DiscoverProgram/team-structure";
import ExpectationsSummary from "@/_components/_sections/DiscoverProgram/expectations-summary";
import ProjectDescriptions from "@/_components/_sections/DiscoverProgram/project-descriptions";
import ApplicationTimeline from "@/_components/_sections/DiscoverProgram/application-timeline";
import ApplicationProcess from "@/_components/_sections/DiscoverProgram/application-process";
import DiscoverFAQ from "@/_components/_sections/DiscoverProgram/discover-faq";
import DiscoverCTA from "@/_components/_sections/DiscoverProgram/discover-cta";
import WarningAlert from "@/_components/ui/warning-alert";

export default function DiscoverProgramPage() {
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

        <ProgramOverview />
        <TechStack />
        <Expectations />
        <TeamStructure />
        <WarningAlert
          title="Important Notice"
          message="Participants who are not fulfilling expectations are subject to
            removal from the Discover Program at the discretion of DISC exec. An
            applicant waitlist will be maintained to reduce the impact of these
            potential removals on the teams and projects"
        />
        <ExpectationsSummary />
        <ProjectDescriptions />
        <ApplicationTimeline />
        <ApplicationProcess />
        <DiscoverFAQ />
        <DiscoverCTA />
      </div>
    </>
  );
}
