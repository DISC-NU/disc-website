import Link from "next/link";

export default function TechStack() {
  return (
    <section className="mb-16" id="tech-stack">
      <h2 className="text-3xl font-bold mb-8">
        <span className="relative">
          <span className="relative z-10">Tech Stack</span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(20, 189, 149, 0.20)",
            }}
          ></span>
        </span>
      </h2>

      <div className="space-y-6 text-gray-500">
        <p className="text-base leading-relaxed">
          This year, we are standardizing the tech stack across all projects.
          This will ensure we are able to produce high-quality software that can
          be easily deployed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">🎨</span>
              <span>
                <strong>Design</strong>: All UI/UX design will be done using{" "}
                <Link
                  href="https://www.figma.com/files/team/1427733327288889266/recents-and-sharing?fuid=1237415769196778584"
                  className="underline font-bold"
                >
                  Figma
                </Link>
              </span>
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">⚛️</span>
              <span>
                <strong>Frontend</strong>: Built with{" "}
                <Link href="https://react.dev/" className="underline font-bold">
                  React
                </Link>{" "}
                and{" "}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="underline font-bold"
                >
                  JavaScript
                </Link>
                , using:
                <br />• Routing:{" "}
                <Link
                  href="https://reactrouter.com/home"
                  className="underline font-bold"
                >
                  React Router v7
                </Link>
                <br />• Styling:{" "}
                <Link
                  href="https://styled-components.com/"
                  className="underline font-bold"
                >
                  styled components
                </Link>
              </span>
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">🗄️</span>
              <span>
                <strong>Backend</strong>:{" "}
                <Link
                  href="https://www.postgresql.org/"
                  className="underline font-bold"
                >
                  PostgresSQL
                </Link>{" "}
                database and APIs built using{" "}
                <Link
                  href="https://nodejs.org/en"
                  className="font-bold underline"
                >
                  Node
                </Link>{" "}
                and{" "}
                <Link
                  href="https://expressjs.com/"
                  className="underline font-bold"
                >
                  Express
                </Link>
                , with:
                <br />• User authentication:{" "}
                <Link
                  href="https://supabase.com/docs/guides/auth"
                  className="underline font-bold"
                >
                  Supabase Auth
                </Link>
              </span>
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">🚀</span>
              <span>
                <strong>Deployment</strong>:
                <br />• Frontend and API:{" "}
                <Link
                  href="https://vercel.com/ethanpaneraas-projects"
                  className="underline font-bold"
                >
                  Vercel
                </Link>
                <br />• Database:{" "}
                <Link
                  href="https://supabase.com/"
                  className="underline font-bold"
                >
                  Supabase
                </Link>
              </span>
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">🛠️</span>
              <span>
                <strong>Development Tools</strong>:
                <br />•{" "}
                <Link
                  href="https://git-scm.com/"
                  className="underline font-bold"
                >
                  Git
                </Link>{" "}
                on GitHub for version control
                <br />•{" "}
                <Link
                  href="https://code.visualstudio.com/"
                  className="underline font-bold"
                >
                  Visual Studio Code
                </Link>{" "}
                as our recommended code editor (+ Neovim if you&apos;d like)
              </span>
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <p className="flex items-start gap-3 text-base text-gray-500">
              <span className="text-2xl">🔌</span>
              <span>
                <strong>Additional Technologies</strong>: Some additional
                technologies (mostly 3rd party APIs), depending on the project
              </span>
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed mt-8">
          Our Tech Leads (
          <Link
            href="https://www.linkedin.com/in/amyzliao/"
            className="underline font-bold"
          >
            Amy
          </Link>
          ,{" "}
          <Link
            href="https://ethan-pineda.vercel.app/"
            className="underline font-bold"
          >
            Ethan
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/aanand-patel1/"
            className="underline font-bold"
          >
            Aanand
          </Link>
          ) are well-versed in all of these technologies and will act as
          mentors/teachers for the entire duration of the program. However, we
          do expect participants to have basic familiarity with one or more of
          these technologies before the program begins (check out our fall{" "}
          <Link
            href="https://disc-fall-2024-workshop-series-website.vercel.app/"
            className="underline font-bold"
          >
            workshop series website
          </Link>
          ).
        </p>
      </div>
    </section>
  );
}
