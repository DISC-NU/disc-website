"use client";

import { ApplicationTimeline } from "@/_components/_sections/ExecutiveBoardApplications/application-timeline";
import { RolesTabs } from "@/_components/_sections/ExecutiveBoardApplications/role-tabs";
import { FAQSection } from "@/_components/_sections/ExecutiveBoardApplications/exec-applications-faq";
import { CallToAction } from "@/_components/_sections/ExecutiveBoardApplications/call-to-action";
import { HeroSection } from "@/_components/_sections/ExecutiveBoardApplications/exec-applications-hero";

export default function ExecApplicationPage(): React.ReactNode {
  return (
    <div className="w-full">
      <HeroSection />
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ApplicationTimeline />
          <RolesTabs />
        </div>
      </section>
      <FAQSection />
      <CallToAction />
    </div>
  );
}
