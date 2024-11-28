"use client";

import { useEffect, useState, useMemo } from "react";
import { Button } from "@/_components/ui/button";

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("program-overview");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = useMemo(
    () => [
      { id: "program-overview", label: "Program Overview" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "expectations", label: "Participant Expectations" },
      { id: "roles", label: "Roles" },
      { id: "project-descriptions", label: "Project Descriptions" },
      { id: "program-timeline", label: "Program Timeline" },
      { id: "application-process", label: "Application Process" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Apply Now" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isXlScreen = window.innerWidth >= 1280; // xl breakpoint
      const offset = isXlScreen ? 80 : 120; // larger offset for horizontal nav

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Large screens - vertical navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
        <nav className="bg-white rounded-lg shadow-lg p-2">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full text-left justify-start text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-[rgba(20,189,149,0.1)] text-[rgb(20,189,149)] hover:bg-[rgba(20,189,149,0.15)]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Medium screens - horizontal navigation */}
      <div className="hidden md:block xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg w-screen mb-2">
        <nav className="max-w-4xl mx-auto px-4">
          <ul className="flex overflow-x-auto py-2 gap-2 hide-scrollbar">
            {sections.map((section) => (
              <li key={section.id} className="flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`whitespace-nowrap text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-[rgba(20,189,149,0.1)] text-[rgb(20,189,149)] hover:bg-[rgba(20,189,149,0.15)]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SectionNavigation;
