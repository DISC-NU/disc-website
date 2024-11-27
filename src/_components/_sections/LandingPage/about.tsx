import { IntroSection } from "@/_components/_sections/LandingPage/intro";
import { FeaturesSection } from "@/_components/_sections/LandingPage/features";
import { ClientProjectsSection } from "@/_components/_sections/LandingPage/projects";
import { WorkshopSection } from "@/_components/_sections/LandingPage/workshop";
import CompanyMarquee from "@/_components/_sections/LandingPage/work";
import ClientMarquee from "@/_components/_sections/LandingPage/past-clients";
export default function AboutSection() {
  return (
    <section className="mt-36 flex flex-col items-center px-4 py-12">
      <div className="max-w-6xl w-full">
        <IntroSection />
        <FeaturesSection />
        <CompanyMarquee />
        <ClientProjectsSection />
        <ClientMarquee />
        <WorkshopSection />
      </div>
    </section>
  );
}
