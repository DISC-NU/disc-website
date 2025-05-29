import { FAQItem } from "@/_components/_sections/ExecutiveBoardApplications/faq-item";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export const FAQSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <HeaderWithHighlight highlight={true} center={true} className="mb-12">
          FAQs
        </HeaderWithHighlight>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FAQItem
            question="Who can apply to be on the exec board?"
            answer="Any Northwestern undergraduate or graduate student who will be enrolled during the 2025-2026 academic year is eligible to apply.<br /><br /><strong>Note:</strong> We will consider applications from students who will be studying abroad or on co-op during the academic year. However, all exec members must be available to attend weekly exec meetings and fulfill their role-specific responsibilities."
            delay={0.1}
          />
          <FAQItem
            question="Do I need prior experience with DISC to apply?"
            answer="Although prior involvement with DISC is helpful (e.g Discover program, fall workshop series, general member event attendance), it is not required. We are looking for new and innovative ideas and more importantly, passionate individuals who align with our mission, are committed to the role(s) that they apply for and generally want to push DISC even further."
            delay={0.2}
          />
          <FAQItem
            question="Can I apply for multiple positions?"
            answer="Yes, you can apply for multiple positions. Just indicate your preferences in the application form. <br /><br /><strong>Note:</strong> You must submit a separate application for each role you are interested in (aka fill out the form multiple times). For generic application questions, you can copy and paste your responses."
            delay={0.3}
          />
          <FAQItem
            question="What is the time commitment for exec board members?"
            answer="Time commitments vary by role, but all exec members must attend weekly meetings and fulfill their role-specific responsibilities. Most positions require 2-5 hours per week."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
