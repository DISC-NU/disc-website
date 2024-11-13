import { IntroSection } from "@/_components/_sections/intro";
import { FeaturesSection } from "@/_components/_sections/features";
import { ClientProjectsSection } from "@/_components/_sections/projects";
import { WorkshopSection } from "@/_components/_sections/workshop";
import CompanyMarquee from "@/_components/_sections/work";
import ClientMarquee from "@/_components/_sections/past-clients";
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
