export default function ProgramOverview() {
  return (
    <section className="mb-16" id="program-overview">
      <h2 className="text-3xl font-bold mb-8">
        <span className="relative">
          <span className="relative z-10">Program Overview</span>
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
          The <strong>Discover Program</strong> connects student tech developers
          with local organizations that have software needs. Through this
          2-quarter-long program, teams of 5-6 students build an industry-grade
          web application from start to finish that solves a critical problem
          for one of our clients. All of the clients we work with are local
          nonprofits or startups, making this a great opportunity to give back
          to the community while gaining technical experience.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-8 mt-12">
        <span className="relative">
          <span className="relative z-10">What You&apos;ll Gain</span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(20, 189, 149, 0.20)",
            }}
          ></span>
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">👥</span>
            <span>
              <strong>Find mentorship and companionship</strong>: The DISC
              community includes hundreds of students and alumni that are
              interested both in building software and helping the community,
              making it easy to find like-minded individuals. And every step of
              the way, students will receive coaching and mentorship from
              experienced upperclassmen.
            </span>
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">🌟</span>
            <span>
              <strong>Make an impact</strong>: All projects solve critical
              problems for local organizations. Since students build these
              projects from the ground up, every student has a huge individual
              impact for the client.
            </span>
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">💻</span>
            <span>
              <strong>Develop technical skills</strong>: All of our projects are
              built using the most popular programming languages, frameworks,
              and libraries in modern web development. Students in the program
              will become highly-skilled in these technologies.
            </span>
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">🤝</span>
            <span>
              <strong>Develop soft skills</strong>: All students will gain
              experience working in teams, and all students will be closely
              interfacing with their client. This builds the critical
              communication and collaboration skills that set great developers
              apart.
            </span>
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">📝</span>
            <span>
              <strong>Boost their resume</strong>: One of the most important
              criteria recruiters look for is impactful and technically complex
              projects. Students in this program will be able to add an
              extremely impressive experience to their resume that they can talk
              up in interviews.
            </span>
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <p className="flex items-start gap-3 text-base text-gray-500">
            <span className="text-2xl">🎯</span>
            <span>
              <strong>Prepare for jobs</strong>: Every aspect of the program
              simulates what it&apos;s like to work in tech as part of a
              software development team. It&apos;s as close to work experience
              as you can get without working a real job.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
