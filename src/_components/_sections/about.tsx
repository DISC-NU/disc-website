export default function AboutSection() {
  return (
    <section className="mt-36 flex justify-center px-4">
      <div className="max-w-4xl">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">
            DISC is building{" "}
            <span className="relative">
              <span
                className="relative z-10"
                style={{ color: "rgb(20, 189, 149)" }}
              >
                technology for good
              </span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
            , one project at a time.
          </h1>

          <p className="mt-4 max-w-3xl text-gray-500">
            Since 2017, DISC has been transforming how Northwestern students
            engage with technology and community impact. What started as a small
            student group has grown into a dynamic community of innovators,
            bringing together diverse perspectives and skills to tackle
            real-world challenges.
            <br />
            <br />
            We believe in the power of collaboration across disciplines. By
            combining technical expertise with creative problem-solving, we've
            built lasting partnerships with organizations throughout the
            Evanston/Chicago area. Our project teams blend computer science,
            design, and social impact to create solutions that matter.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold">
            <span className="relative">
              <span className="relative z-10">What We Do</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Enhance your problem-solving skills through coding!
              </h3>
              <p className="text-gray-500 text-sm">
                We provide a supportive environment where members learn to
                tackle challenges step-by-step. Break down problems, brainstorm
                solutions, implement code, and reach effective solutions
                alongside a vibrant community of like-minded individuals. As a
                member, you'll not only sharpen your technical abilities but
                also forge meaningful connections, meet fellow coders, exchange
                ideas, and collaborate on projects. Together, we navigate the
                ups and downs of coding, celebrating successes and learning from
                setbacks.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Where innovation meets implementation!
              </h3>
              <p className="text-gray-500 text-sm">
                We're passionate about coding and bringing ideas to life through
                technology. Join us as we dive into the world of software
                development and explore ways to enact positive change through
                our code. In our club, we're all about pushing the boundaries of
                traditional coding. We encourage thinking outside the box and
                experimenting with new technologies. It doesn't matter if you're
                a seasoned programmer or just starting out, we offer a space to
                let your creative ideas flow freely and turn them into impactful
                projects. Let's brainstorm solutions to real-world problems and
                develop applications, websites, and tools that make a positive
                difference in our community.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Join our dynamic club and make a difference!
              </h3>
              <p className="text-gray-500 text-sm">
                Our community is dedicated to driving social impact and
                community engagement through leadership at every level. Whether
                you're a project manager, tech lead, or general member, there's
                a role for you to lead and shape our community's future.
                Leadership isn't about titles—it's about action. We empower our
                members to take ownership of projects, develop new ideas, and
                collaborate with like-minded individuals who share a passion for
                making a positive difference. Join us and discover the
                transformative power of leadership.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col">
          <h2 className="text-4xl font-bold">
            <span className="relative">
              <span className="relative z-10">Our Impact</span>
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "1.4375rem",
                  background: "rgba(20, 189, 149, 0.20)",
                }}
              ></span>
            </span>
          </h2>
          <p className="mt-6 text-gray-500">
            Through hands-on projects and mentorship, we empower students to
            grow beyond the classroom. Our teams work directly with community
            partners, gaining real-world experience while making a meaningful
            difference. We're proud to foster an environment where technical
            innovation meets social responsibility, creating technology
            solutions that serve our community's needs.
          </p>
        </div>
      </div>
    </section>
  );
}
