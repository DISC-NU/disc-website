import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function Expectations() {
  return (
    <section className="mb-16" id="expectations">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Participant Expectations
      </HeaderWithHighlight>
      <div className="space-y-6 text-gray-500">
        <p className="text-base leading-relaxed">
          Because we are working with <strong>REAL</strong> clients to build
          software that will have <strong>REAL</strong> users, the stakes are
          high. To ensure that all projects are finished with production-level
          quality, we enforce strict participation requirements for our program
          members.
        </p>

        <p className="text-base text-gray-500 mb-6">
          <strong>All program members are expected to:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base text-gray-500 mb-8">
          <li>Prioritize DISC above (almost) all other commitments.</li>
            <ul>
              <li className="list-disc ml-10 space-y-2 text-base text-gray-500">
                While we encourage you to apply to similar programs like the IEEE technical program, you are only allowed to
                accept <strong> one </strong>offer. We will be coordinating applications across our boards to enforce this policy!
              </li>
            </ul>
          <li>
            Spend minimum 3, average 5 hours per week on DISC-related meetings
            and work
          </li>
          <li>
            Attend studio every week (this is a 1-hour weekly meeting decided by the beginning of the program)
          </li>
          <li>Attend the Winter Showcase and Spring Showcase</li>
          <li>
            Regularly communicate with the rest of their team, and with the
            client whenever requested
          </li>
          <li>
            Be a team player, taking the initiative to help out their teammates
            in whatever ways they can
          </li>
          <li>
            Be vocal about issues, seeking assistance from DISC exec when needed
          </li>
        </ul>
      </div>
    </section>
  );
}
