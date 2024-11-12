import HeroSection from "@/_components/_sections/Hero";
import AboutSection from "@/_components/_sections/about";
import CompanyMarquee from "@/_components/_sections/work";
import MeetTheTeam from "@/_components/_sections/exec";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CompanyMarquee />
      <MeetTheTeam />
    </div>
  );
}
