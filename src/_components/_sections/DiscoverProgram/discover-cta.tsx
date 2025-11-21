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
            Applications for 2025-2026 will be opening in November
          </h2>
          <p className="text-gray-500 text-lg">
            We look forward to seeing you this year!
          </p>
        </div>

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
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
              <span>5-10 minute application</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#40B4B4]" />
              <span>Waitlist applications due week 10 of winter quarter</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
