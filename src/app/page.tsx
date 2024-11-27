import HeroSection from "@/_components/_sections/Hero";
import AboutSection from "@/_components/_sections/about";
import MeetTheTeam from "@/_components/_sections/exec";
import FAQSection from "@/_components/_sections/faq";
import CTASection from "@/_components/_sections/cta";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <MeetTheTeam />
      <FAQSection />
      <CTASection />
    </div>
  );
}
