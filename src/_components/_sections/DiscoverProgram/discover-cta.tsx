import Link from "next/link";

export default function DiscoverCTA() {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center"
      id="cta"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(94, 206, 206, 0.08) 0%, 
              rgba(208, 240, 240, 0.05) 50%,
              rgba(230, 247, 247, 0.03) 100%
            ),
            radial-gradient(circle at 0% 0%, 
              rgba(77, 204, 204, 0.3) 0%, 
              rgba(77, 204, 204, 0) 60%
            ),
            radial-gradient(circle at 100% 0%, 
              rgba(185, 233, 233, 0.2) 0%, 
              rgba(185, 233, 233, 0) 50%
            ),
            radial-gradient(circle at 100% 100%, 
              rgba(64, 180, 180, 0.25) 0%, 
              rgba(64, 180, 180, 0) 60%
            ),
            radial-gradient(circle at 0% 100%, 
              rgba(94, 206, 206, 0.2) 0%, 
              rgba(94, 206, 206, 0) 50%
            ),
            linear-gradient(180deg, 
              rgba(208, 240, 240, 0.1) 0%, 
              rgba(94, 206, 206, 0.15) 100%
            )
          `,
        }}
      />
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#297777] to-[#40B4B4] mb-4">
            Apply to the Discover Program waitlist
          </h2>
          <p className="text-gray-500 text-lg">
            And take the first step towards building impactful projects
          </p>
        </div>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4pbbl1mhY8FhfFzGnw-t0HXvJGpOAflLzF3zvYgcYUNUh0Q/viewform"
          target="_blank"
          className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#297777] to-[#40B4B4] px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#246666] hover:to-[#35A3A3]"
        >
          Apply Now
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        <div className="mt-8 space-y-4">
          <p className="text-gray-500">
            Questions? Contact us at{" "}
            <a
              href="mailto:disc@u.northwestern.edu"
              className="text-[#40B4B4] hover:underline font-medium"
            >
              disc@u.northwestern.edu
            </a>{" "}
            or join our{" "}
            <Link
              href="https://discord.gg/disc"
              className="text-[#40B4B4] hover:underline font-medium"
            >
              DISCord
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
              <span>5-10 minute application</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
              <span>Waitlist applications due week 10 of winter quarter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
