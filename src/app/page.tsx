import HeroSection from "@/_components/_sections/Hero";
import AboutSection from "@/_components/_sections/about";
import CompanyMarquee from "@/_components/_sections/work";
import MeetTheTeam from "@/_components/_sections/exec";
import FAQSection from "@/_components/_sections/faq";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CompanyMarquee />
      <MeetTheTeam />
      <FAQSection />
    </div>
  );
}
