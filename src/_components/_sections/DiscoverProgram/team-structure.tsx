export default function TeamStructure() {
  return (
    <section className="mb-16" id="team-structure">
      <h2 className="text-3xl font-bold mb-8">
        <span className="relative">
          <span className="relative z-10 text-black">
            Roles
          </span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(20, 189, 149, 0.20)",
            }}
          ></span>
        </span>
      </h2>

      <div className="flex flex-col gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">👔</span>
            <span>
              <strong className="text-lg font-semibold text-[#14BD95]">
                Product Manager (1 per team)
              </strong>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Maintain regular communication with the client, including
                  organizing a recurring meeting with the client to provide
                  updates and clarify expectations
                </li>
                <li>
                  Be a liaison between their team and DISC exec, informing exec
                  about progress and blockers, and informing their team on
                  updates from DISC exec
                </li>
                <li>
                  Schedule and lead regular team meetings (minimum once a week)
                  outside of studio. In these meetings:
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Set agendas</li>
                    <li>Delegate tasks</li>
                    <li>Ensure reasonable progress is being made</li>
                  </ul>
                </li>
                <li>
                  Generally, take initiative and sort out all teamwork logistics
                </li>
                <li>
                  Provide feedback to other team members on their work, taking
                  the initiative to help out others when requested
                </li>
                <li>
                  Ensure that the project is well organized, well documented,
                  finished, and handed off to the client by the end of the
                  program
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">🎨</span>
            <span>
              <strong className="text-lg font-semibold text-[#14BD95]">
                UI/UX Designer (1 per team)
              </strong>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Take ownership of the design of the app:
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Design it from scratch</li>
                    <li>
                      Iteratively improve it using client and team feedback
                    </li>
                    <li>
                      Ensure the design is high-quality and meets client
                      expectations
                    </li>
                    <li>
                      Ensure the actual built interface matches the design
                    </li>
                  </ul>
                </li>
                <li>
                  Regularly communicate design updates to their team, clients,
                  and DISC exec
                </li>
                <li>Write some frontend code</li>
                <li>
                  Provide feedback to other team members on their work, taking
                  the initiative to help out others when requested
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow md:col-span-2">
          <div className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">💻</span>
            <span>
              <strong className="text-lg font-semibold text-[#14BD95]">
                Engineers (3-4 per team)
              </strong>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Write lots of code
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Some engineers might focus on different parts of the stack
                      (frontend engineers and backend engineers). Others will
                      work on all parts of the stack (full stack engineers).
                    </li>
                  </ul>
                </li>
                <li>
                  Take ownership of features:
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Build features from scratch</li>
                    <li>
                      Iteratively improve features using client and team
                      feedback
                    </li>
                    <li>
                      Produce high-quality code that is bug-free and
                      readable/maintainable
                    </li>
                    <li>
                      Learn any and all relevant technologies required for
                      implementation
                    </li>
                    <li>Ensure features meet client expectations</li>
                  </ul>
                </li>
                <li>Regularly communicate updates to their team</li>
                <li>
                  Provide feedback to other team members on their work, taking
                  the initiative to help out others when requested
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
