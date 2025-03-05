"use client";

import { ApplicationTimeline } from "@/_components/_sections/ExecutiveBoardApplications/application-timeline";
import { RolesTabs } from "@/_components/_sections/ExecutiveBoardApplications/role-tabs";
import { FAQSection } from "@/_components/_sections/ExecutiveBoardApplications/exec-applications-faq";
import { CallToAction } from "@/_components/_sections/ExecutiveBoardApplications/exec-cta-section";
import { HeroSection } from "@/_components/_sections/ExecutiveBoardApplications/exec-applications-hero";
import { RoleExpectationsNotice } from "@/_components/_sections/ExecutiveBoardApplications/role-expectations";

export default function ExecApplicationPage(): React.ReactNode {
  return (
    <div className="w-full">
      <HeroSection />
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ApplicationTimeline />
          <RoleExpectationsNotice />
          <RolesTabs />
        </div>
      </section>
      <FAQSection />
      <CallToAction />
    </div>
  );
}
