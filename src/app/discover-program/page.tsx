import SectionNavigation from "@/_components/ui/section-navigation";
import DiscoverProgramHero from "@/_components/_sections/DiscoverProgram/discover-hero";
import ProgramOverview from "@/_components/_sections/DiscoverProgram/program-overview";
import TechStack from "@/_components/_sections/DiscoverProgram/tech-stack";
import Expectations from "@/_components/_sections/DiscoverProgram/expectations";
import TeamStructure from "@/_components/_sections/DiscoverProgram/team-structure";
import ProjectDescriptions from "@/_components/_sections/DiscoverProgram/project-descriptions";
import ApplicationTimeline from "@/_components/_sections/DiscoverProgram/application-timeline";
import ApplicationProcess from "@/_components/_sections/DiscoverProgram/application-process";
import DiscoverFAQ from "@/_components/_sections/DiscoverProgram/discover-faq";
import DiscoverCTA from "@/_components/_sections/DiscoverProgram/discover-cta";
import WarningAlert from "@/_components/ui/warning-alert";

export default function DiscoverProgramPage() {
  return (
    <>
      <SectionNavigation />
      <div className="w-full max-w-4xl mx-auto px-4 py-32">
        <DiscoverProgramHero />
        <ProgramOverview />
        <TechStack />
        <Expectations />
        <WarningAlert
          title="Important Notice"
          message="Participants who are not fulfilling expectations are subject to
            removal from the Discover Program at the discretion of DISC exec. An
            applicant waitlist will be maintained to reduce the impact of these
            potential removals on the teams and projects"
        />
        <TeamStructure />
        <ProjectDescriptions />
        <ApplicationTimeline />
        <ApplicationProcess />
        <DiscoverFAQ />
      </div>
      <DiscoverCTA />
    </>
  );
}
