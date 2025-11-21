import Link from "next/link";

export default function ApplyButton() {
    return (
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
    )
}