import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import { TimelineStep } from "@/_components/_sections/ExecutiveBoardApplications/timeline-step";

export const ApplicationTimeline: React.FC = () => {
  return (
    <div className="mb-16">
      <HeaderWithHighlight highlight={true} center={true} className="mb-12">
        Application Timeline
      </HeaderWithHighlight>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TimelineStep
          number="1"
          title="Application Opens"
          date="March 6th - 16th"
          description="The application window opens for all executive board positions."
          delay={0.1}
        />
        <TimelineStep
          number="2"
          title="Application Closes"
          date="March 16th"
          description="All applications must be submitted by this date."
          delay={0.2}
        />
        <TimelineStep
          number="3"
          title="Interview Period"
          date="March 17th - April 4th"
          description="Selected candidates will be invited for interviews."
          delay={0.3}
        />
        <TimelineStep
          number="4"
          title="Offers Sent"
          date="April 1st - 9th"
          description="Offers will be sent on a rolling basis. Applicants have 48 hours to accept."
          delay={0.4}
        />
      </div>

      <div className="mt-6 max-w-lg mx-auto">
        <p className="text-gray-500 text-center text-sm">
          *Please note that some roles will have a different timelines and or
          interview stages/rounds. Please refer to the applicatôn form for more
          details.
        </p>
      </div>
    </div>
  );
};
