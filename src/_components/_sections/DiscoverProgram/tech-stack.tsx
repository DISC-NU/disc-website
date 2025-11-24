import Link from "next/link";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function TechStack() {
  // const getImagePath = (src: string) => {
  //   const isProduction = process.env.NODE_ENV === "production";
  //   return isProduction ? `/disc-website${src}` : src;
  // };

  return (
    <section className="mb-16" id="tech-stack">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Discover Program Technology Stack
      </HeaderWithHighlight>

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
                  href="https://firebase.google.com/docs/auth"
                  className="underline font-bold"
                >
                  Firebase Auth
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
                  href="https://firebase.google.com"
                  className="underline font-bold"
                >
                  Firebase
                </Link>
                <br />• Database:{" "}
                <Link
                  href="https://aws.amazon.com/rds/"
                  className="underline font-bold"
                >
                  AWS RDS
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
            href="https://www.linkedin.com/in/christian-lee-b429032a9/"
            className="underline font-bold"
          >
            Christian
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/brock-brown-058216221/"
            className="underline font-bold"
          >
            Brock
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/shah-vihaan/"
            className="underline font-bold"
          >
            Vihaan
          </Link>
          ) are well-versed in all of these technologies and will act as
          mentors/teachers for the entire duration of the program. However, we
          do expect participants to have basic familiarity with one or more of
          these technologies before the program begins (check out our fall{" "}
          <Link
            href="https://workshops.discnu.org/"
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
