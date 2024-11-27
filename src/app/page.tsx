import HeroSection from "@/_components/_sections/LandingPage/Hero";
import AboutSection from "@/_components/_sections/LandingPage/about";
import MeetTheTeam from "@/_components/_sections/LandingPage/exec";
import FAQSection from "@/_components/_sections/LandingPage/faq";
import CTASection from "@/_components/_sections/LandingPage/cta";

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
